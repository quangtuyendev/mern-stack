import React, { useReducer } from 'react';
import * as types from '../actions/types';

export const LoadingContext = React.createContext();

const initialState = false;

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_LOADING:
      return true;
    case types.HIDE_LOADING:
      return false;
    default:
      throw new Error('Unexpect action');
  }
}

function LoadingProvider({ children }) {
  const [loading, dispatch] = useReducer(reducer, initialState);
  return (
    <LoadingContext.Provider
      value={{
        loading,
        dispatch,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export default LoadingProvider;
