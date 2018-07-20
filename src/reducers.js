import {GUESS, NEW_GAME, HELP} from './actions';

const initialState ={
        guesses: [],
        feedback: 'Make your guess!',
        auralStatus: '',
        correctAnswer: Math.round(Math.random() * 100) + 1
    }

    export const constReducer = (state=initialState, action) =>{
        if(action.type === GUESS){
            
        }
        else if(action.type === NEW_GAME){
        
        }
        else if(action.type === HELP){

        }
    }