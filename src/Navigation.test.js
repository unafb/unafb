import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

it('navbar renders without crashing', () => {
  const navigation = shallow(<Navigation />);

  expect(navigation.find('.navbar').exists()).toEqual(true);
});
