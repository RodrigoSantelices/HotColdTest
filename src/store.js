import {createStore} from 'redux';
import {gameMaker} from './reducers';

export default createStore(gameMaker);