import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  it('renders a title', () => {
    const title = 'The title';
    const component = shallow(<App title={ title } />);

    expect(component.text()).toBe(title);
  });
});
