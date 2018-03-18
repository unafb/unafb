import React from 'react';
import { shallow } from 'enzyme';
import App from './App'
import Navigation from './Navigation';

it('navbar renders without crashing', () => {
  const app = shallow(<App />);

  expect(app.find('Navigation').exists()).toEqual(true);
});
