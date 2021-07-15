import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {expect} from '@jest/globals';
import SampleComponent from './SampleComponent';

Enzyme.configure({adapter: new Adapter()});

describe('Sample Component', () => {
  it('should Display "I am active" after  the button press', () => {
    const TEXT_TEST_ID = 'text';
    const BUTTON_TEST_ID = 'button';
    const wrapper = shallow(<SampleComponent />);

    //trigger button press
    const button = wrapper.find({testid: BUTTON_TEST_ID});

    //initial press
    button.simulate('press');

    //check if the text has changed after pressing the button
    const text = wrapper.find({testid: TEXT_TEST_ID}).dive();

    expect(text.text()).toBe('I am active');

    // press the button 2nd time
    button.simulate('press');

    // new instance of the textview to change whether its value has changed after the press event
    const textChanged = wrapper.find({testid: TEXT_TEST_ID}).dive();

    expect(textChanged.text()).toBe('I am inactive');
  });
});
