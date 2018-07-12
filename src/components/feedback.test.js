import React from 'react';
import {shallow, mount} from 'enzyme';
import Feedback from './feedback';

describe('<Feedback />', () => {
    it('Renders without crashing', ()=> {
        shallow(<Feedback />);
    })
    it('Renders a number', ()=> {
        const wrapper = shallow(<Feedback guessCount="10" />)
        console.log(wrapper.find("h2").getElement().key,"!!!!!!!!!!!!!")
        expect(wrapper.find("h2").getElement().key).toEqual("10");
       
    })
    it('Returns feedback', ()=> {
        const wrapper = shallow(<Feedback feedback="text" />)
        expect(wrapper.find("h2").text()).toEqual("text Guess again!");
    })
    it('Returns feedback', ()=> {
        const wrapper = shallow(<Feedback feedback="text" guessCount={0} />)
        expect(wrapper.find("h2").text()).toEqual("text ");
    })
    it('Returns feedback', ()=> {
        const wrapper = shallow(<Feedback guessCount={0} />)
        expect(wrapper.find("h2").text()).toEqual(" ");
    })
})