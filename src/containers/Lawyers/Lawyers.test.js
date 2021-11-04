import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import Lawyers from './Lawyers';
import store from '../../Redux/store';

describe('Lawyers', () => {
  it('renders Lawyers component with a message', () => {
    render(
      <Provider store={store}>
        <Router>
          <Lawyers />
        </Router>
      </Provider>,
    );
  });

  it('matches Lawyers snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Lawyers />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
