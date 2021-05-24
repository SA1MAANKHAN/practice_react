import React, { createContext, useContext, useReducer } from "react";

// When React renders a component that subscribes to this Context object
// it will read the current context value from the closest matching Provider
// above it in the tree.
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  // useReducer returns the current state paired with a dispatch method
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// returns the current context value for that context
export const useStateValue = () => useContext(StateContext);
