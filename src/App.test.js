import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  it('renders a Router', () => {
    const component = shallow(<App/>);

    expect(component.type()).toBe(BrowserRouter);
  });
});
