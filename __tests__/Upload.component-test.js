// __tests__/Intro-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Upload from '../Components/Upload.component';

test('renders correctly', () => {
  const tree = renderer.create(<Upload />).toJSON();
  expect(tree).toMatchSnapshot();
});