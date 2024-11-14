/**
 * @author 'abdullah allhayni  '
 * @version v1.0
 * @description Provider  Creater in Top APP  and retern action  .
 * @TODO : Provider  .
 *
 * @step :
 * 1- create function
 * 2- Add type and payload
 * 3- return an action
 * 4- export *
 */
import React from "react";
import ReactDOM from "react-dom/client"; // For React 18
import App from "./components/App.js"; // Updated import // Your main App component
import { configureStore } from "@reduxjs/toolkit"; // Redux Toolkit's configureStore method
import { Provider } from "react-redux"; // To connect Redux store to React
import reducer from "./reducers/index.js"; // Assuming you have a rootReducer defined here

// Create the Redux store using configureStore
const store = configureStore({
  reducer, // Your rootReducer
  // You can optionally add middleware and other store configurations here
  // For example:
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(someMiddleware)
});

// Rendering the app with Redux provider wrapping the entire app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Wrap your app with Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
