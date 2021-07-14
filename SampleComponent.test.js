import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SampleComponent from './SampleComponent';
import {expect} from '@jest/globals';

Enzyme.configure({adapter: new Adapter()});

describe('SampleComponent', () => {
  it('should run properly', () => {
    const wrapper = shallow(<SampleComponent />);
    //trigger button press
    wrapper
      .findWhere(node => node.prop('testid') === 'button')
      .simulate('press');

    //check if the text has changed after pressing the button
    const text = wrapper
      .findWhere(node => node.prop('testid') === 'text')
      .render();

    expect(text.text()).toBe('I am active');
  });
});
