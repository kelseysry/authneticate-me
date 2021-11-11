// react functional component named LoginFormPage
// Render a form with a controlled input for the user login credential
//(username or email) and a controlled input for the user password.

// frontend/src/components/LoginFormPage/index.js
import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';
import pictures from '../../data/pictures'


function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user); // first argument always state -> session from index.js in store, .user is from initial state in reducer for sessionReducer
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  //if there is a current session user in the redux store, then redirect the user to the / path
  // if trying to access the LognFormPage
  if (sessionUser) return (
    <Redirect to="/"/>
  )

  // if (!sessionUser) return (
  //   <Redirect to="/login"/>
  // )


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    // dispatch the login thunk action when submit form
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => { // handle/ display errors from login thunk action if any
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <>
    <div className="signup-pic-container" style={{ backgroundImage: `url('${pictures.collection[5].imageUrl}')` }}>
      <div className="explore">Login</div>
    </div>
    <form className="signup-form-style" onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label>
        Username or Email
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Log In</button>
    </form>
    </>
  );
}

export default LoginFormPage;
