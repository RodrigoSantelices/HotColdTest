import React from 'react';
import {shallow, mount} from 'enzyme';
import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
    it('Renders without crashing', ()=> {
        shallow(<AuralStatus />);
    });
    it('Renders the Aural Status', () => {
      const wrapper = shallow (<AuralStatus auralStatus="test" />);
      expect(wrapper.find("p").text()).toEqual("test");
      console.log(wrapper.find("p").text())
    })
})