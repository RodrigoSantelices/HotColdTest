import React from 'react';
import {shallow, mount} from 'enzyme';
import Game from '../game';


describe('<Game />', () => {
    it('Renders without crashing', ()=> {
        shallow(<Game />);
    })
    it('Renders a new game', ()=> {
        const wrapper = shallow(<Game />)

        wrapper.setState({
            guesses: [1, 2, 3, 4, 5],
            feedback:'Awesome',
            correctAnswer: -1
        })
       wrapper.instance().restartGame();
       expect(wrapper.state('guesses')).toEqual([]);
       expect(wrapper.state('feedback')).toEqual('Make your guess!')
       expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
       expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);

    })

    it('lets you make guesses', ()=>{
        const wrapper = shallow(<Game />)
        wrapper.setState({
            correctAnswer:82
        });
        wrapper.instance().makeGuess(25);
        expect(wrapper.state('guesses')).toEqual([25]);
        expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');
 
        wrapper.instance().makeGuess(82);
        expect(wrapper.state('guesses')).toEqual([25, 82]);
        expect(wrapper.state('feedback')).toEqual('You got it!');
    })
})