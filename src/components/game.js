import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';
import {connect} from 'react-redux';
import {newGame, help, guess} from '../actions';


export class Game extends React.Component {
 
  restartGame() {
  
    this.props.dispatch(newGame())
  }

  makeGuess(number) {
  
    this.props.dispatch(guess(number))
    // We typically wouldn't touch the DOM directly like this in React
    // but this is the best way to update the title of the page,
    // which is good for giving screen-reader users
    // instant information about the app.
    document.title = this.props.feedback ? `${this.props.feedback} | Hot or Cold` : 'Hot or Cold';
  }

  generateAuralUpdate() {
    this.props.dispatch(help())
  }

  render() {
    const { feedback, guesses, auralStatus } = this.props;
    const guessCount = guesses.length;

    return (
      <div>
        <Header
          onRestartGame={() => this.props.dispatch(newGame())}
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}
        />
        <main role="main">
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.makeGuess(guess)}
          />
          <StatusSection guesses={guesses} 
            auralStatus={auralStatus}
          />
          <InfoSection />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  feedback: state.feedback,
  guesses: state.guesses,
  auralStatus: state.auralstatus
})

export default connect(mapStateToProps)(Game)