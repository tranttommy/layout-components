import React from 'react';
import { shallow } from 'enzyme';
import Header from '../src/components/Header.js';

describe('Header component', () => {
  it('renders a Header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
