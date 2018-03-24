import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

it('Login page renders without crashing', () => {
  const login = shallow(<Login />);

  expect(login.find('.Login').exists()).toEqual(true);
});
