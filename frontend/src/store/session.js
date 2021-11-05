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
  const response = await csrfFetch('/api/session', { // csrfFetch grabbing cookie from comp and attach to request -> prove user is indeed the right one
    method: 'POST',
    body: JSON.stringify({
      credential, password
    }),
  });

  const data = await response.json();
  dispatch(setUser(data.user))
  return response
};

// restore session user thunk action GET /api/session
export const restoreUser = () => async dispatch => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  if(data.user) {
    dispatch(setUser(data.user)); // dispatch the action for setting
    //the session user to the user in the response's body.
    // b/c of the back end // user: user.toSafeObject()
  } else {
    dispatch(setUser(null))
  }
  return response;
};

// signup thunk
export const signup = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

// logout thunk
export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
  });
  dispatch(removeUser());
  return response;
};

const initialState = { user: null };

// since we're only dealing with one user -> we don't need an id b/c only one person in this session
const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      // update user key, and set to object
      newState.user = action.user;
      return newState;
      // newState = {...state, user: action.user};
      // newState = {...state, [action.user.id]: action.user};

      // return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};





export default sessionReducer



// npx sequelize-cli model:generate --name Business --attributes id:integer,ownerId:integer,title:string,description:text,address:string,city:string,state:string,zipCode:string,lat:decimal,lng:decimal
