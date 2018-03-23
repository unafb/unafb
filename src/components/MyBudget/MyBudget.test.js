import React from 'react';
import { shallow } from 'enzyme';
import MyBudget from './MyBudget';

it('MyBudget page renders without crashing', () => {
  const myBudget = shallow(<MyBudget />);

  expect(myBudget).toMatchSnapshot();
});
