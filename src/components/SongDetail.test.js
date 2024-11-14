// SongDetail.test.js

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SongDetail from './SongDetail.js';
import '@testing-library/jest-dom/extend-expect';

const mockReducer = (state = { selectedSong: null }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const renderWithRedux = (component, { initialState, store = createStore(mockReducer, initialState) } = {}) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('SongDetail Component', () => {
  test('renders message when no song is selected', () => {
    const { getByText } = renderWithRedux(<SongDetail />);
    expect(getByText(/select a song to see the details/i)).toBeInTheDocument();
  });

  test('renders song details when a song is selected', () => {
    const initialState = {
      selectedSong: {
        title: 'Shape of You',
        duration: '3:53',
      },
    };

    const { getByText } = renderWithRedux(<SongDetail />, { initialState });

    expect(getByText(/song details/i)).toBeInTheDocument();
    expect(getByText(/title:/i)).toHaveTextContent('Shape of You');
    expect(getByText(/duration:/i)).toHaveTextContent('3:53');
  });
});