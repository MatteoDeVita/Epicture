// __tests__/Intro-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Photos from '../Components/Photos.component';

test('renders correctly', () => {
  const tree = renderer.create(<Photos />).toJSON();
  expect(tree).toMatchSnapshot();
});