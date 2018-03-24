import React from 'react';
import { shallow } from 'enzyme';
import Calendar from './Calendar';

it('Calendar page renders without crashing', () => {
  const calendar = shallow(<Calendar />);

  expect(calendar.find('.Calendar').exists()).toEqual(true);
});
