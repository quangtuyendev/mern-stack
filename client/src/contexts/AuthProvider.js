import React, { useReducer } from 'react';
import * as types from '../actions/types';

export const AuthContext = React.createContext();

const initialState = JSON.parse(localStorage.getItem('user')) || {};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.AUTH_SIGNIN:
      const { username, isAuthenticated } = action.payload;
      localStorage.setItem(
        'user',
        JSON.stringify({ username, isAuthenticated })
      );
      return {
        ...action.payload,
      };
    case types.AUTH_SIGNOUT:
      return {};
    default:
      throw new Error('Unexpected action');
  }
}

export default function AuthProvider({ children }) {
  const [auth, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        auth,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
