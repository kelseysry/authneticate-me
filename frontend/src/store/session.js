// This file will contain all the actions specific to the session
//user's information and the session user's Redux reducer.

import { csrfFetch } from "./csrf"

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser'

// action creator for login user
const setUser = (user) => {
  return {
    type: SET_USER,
    user: user,
  };
};

// action creator for log out user
const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

// thunk to login user
export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  // we are able to extract this credential and password from user info b/c of
  //return dispatch(sessionActions.login({ credential, password })) in components/loginFormPage
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential, password
    }),
  });

  const data = await response.json();
  dispatch(setUser(data.user))
  return response
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.user;
      return newState;
      // newState = {...state, [action.user]: action.user};
      // return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      // newState = {...state};
      // delete newState[action.user];
      return newState;
    default:
      return state;
  }
};

// restore session user thunk action GET /api/session
export const restoreUser = () => async dispatch => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  dispatch(setUser(data.user)); // dispatch the action for setting
  //the session user to the user in the response's body.
  return response;
};


export default sessionReducer
