// App.test.js

import React from 'react';
import { render } from '@testing-library/react'; // Import render method from React Testing Library
import { Provider } from 'react-redux'; // Import Provider to wrap the app
import { configureStore } from '@reduxjs/toolkit'; // Import configureStore
import App from './App'; // Import your main App component
import reducer from '../reducers'; // Import your rootReducer
import '@testing-library/jest-dom/extend-expect'; // Import jest-dom for additional matchers

// Create a function to set up the Redux store for testing
const setUpStore = (initialState) => {
  return configureStore({
    reducer,
    preloadedState: initialState, // Optional: set initial state if needed
  });
};

describe('App Component', () => {
  it('renders without crashing and includes SongList', () => {
    const store = setUpStore(); // Create a store instance
    const { getByText } = render(
      <Provider store={store}> {/* Wrap your app with Provider */}
        <App />
      </Provider>
    );

    // Check if the App component renders and includes the SongList component
    expect(getByText(/song list/i)).toBeInTheDocument(); // Adjust this text to match the actual text in your SongList component
  });
});