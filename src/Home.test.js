import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

it('Homepage renders without crashing', () => {
  const home = shallow(<Home />);

  expect(home).toMatchSnapshot();
});
