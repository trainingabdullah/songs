// App.test.js

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App.js';
import reducer from '../reducers/index.js';
import '@testing-library/jest-dom/extend-expect';

const setUpStore = (initialState) => {
  return configureStore({
    reducer,
    preloadedState: initialState,
  });
};

describe('App Component', () => {
  it('renders without crashing and includes SongList', () => {
    const store = setUpStore();
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByText(/song list/i)).toBeInTheDocument();
  });
});