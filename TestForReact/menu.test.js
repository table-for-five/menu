import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Menu from '../client/src/components/Menu.jsx';

configure({ adapter: new Adapter() });

describe('Menu', () => {
  it('should show some text', () => {
    const wrapper = shallow(<Menu />);
    const text = wrapper.find('Text Text');
    expect(wrapper.text()).to.be('Menu');
  });
});