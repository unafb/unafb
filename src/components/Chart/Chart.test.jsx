import React from 'react';
import { shallow } from 'enzyme';
import Chart from './Chart';

it('Chart page renders without crashing', () => {
  const chart = shallow(<Chart />);

  expect(chart.find('.Chart').exists()).toEqual(true);
});
