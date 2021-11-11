// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session'
import './Navigation.css';
import { useDispatch } from "react-redux";


function Navigation({ isLoaded }){
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  function demo () {

    dispatch(sessionActions.login({
    credential: 'Demo-lition',
    password: 'password'
  }));
  }


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
      <div className="sign-up-login-container">
        <div className="sign-log-style">
        <NavLink to="/login">Log In</NavLink>
        </div>
        <div className="sign-log-style">
        <NavLink to="/signup">Sign Up</NavLink>
        </div>
        <button onClick={demo}><i class="fas fa-user-secret fa-2x"></i></button>
      </div>
      </>
    );
  }

  return (
  <nav>
    <div className="home-explore">
      <div className="subNav">
        <div className="pad">
        <NavLink exact to="/"><i class="fas fa-home fa-lg"></i></NavLink>
        </div>
        <div className="pad">
        <NavLink to="/business">Explore</NavLink>
        </div>
        <div className="pad">
        <NavLink to="/createBusiness">Add Restaurant</NavLink>
        </div>
      {/* <ul>
        <li>
        <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to="/business">Explore</NavLink>
        </li>
        <li>
        <NavLink to="/createBusiness">Add Restaurant</NavLink>
        </li>
      </ul> */}
      </div>
      <div>
      {isLoaded && sessionLinks}
      </div>
    </div>
  </nav>




  // <nav>
  //   <div className="home-explore">
  //     <div className="home">
  //     <NavLink activeClassName='red' exact to="/">Home</NavLink>
  //     </div>
  //     <div>
  //     <NavLink to="/business">Explore</NavLink>
  //     </div>
  //     <div>
  //     <NavLink to="/createBusiness">Add Restaurant</NavLink>
  //     </div>
  //   </div>
  //   <div>
  //     {isLoaded && sessionLinks}
  //   </div>
  // </nav>
  );
  // only show sessionLink if check app has loaded
  // isLoaded runs before restoreUser runs. B/c we run our jsx before our logic.
  // want basic functionality of web to work first before user logins
}

export default Navigation;
