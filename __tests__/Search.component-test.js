// __tests__/Intro-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../Components/Search.component';

test('renders correctly', () => {
  const tree = renderer.create(<Search />).toJSON();
  expect(tree).toMatchSnapshot();
});