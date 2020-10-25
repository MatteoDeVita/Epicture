// __tests__/Intro-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Favorites from '../Components/Favorites.component';

test('renders correctly', () => {
  const tree = renderer.create(<Favorites />).toJSON();
  expect(tree).toMatchSnapshot();
});