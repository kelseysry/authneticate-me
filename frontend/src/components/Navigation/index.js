// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session'
import './Navigation.css';
import { useDispatch } from "react-redux";
import UserButton from './UserButton';
import AboutLinks from '../AboutLinks/AboutLinks';
import pictures from '../../data/pictures';
import { useHistory } from 'react-router';
import { LoginModal } from "../../context/Modal";
import { useState } from 'react'; // side effects

function Navigation({ isLoaded }){
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  function demo () {

    dispatch(sessionActions.login({
    credential: 'Demo-lition',
    password: 'password'
  }));
  }


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="profile-button-nav">
        <ProfileButton user={sessionUser} />
        <div className="profile-nav">Profile</div>
      </div>
    );
  } else {
    sessionLinks = (
      <>
      <UserButton />

      </>
    );
  }

  return (
  <>
  <nav className="big-screen">
    <div className="home-explore">
      <div className="subNav">
        <div className="angkor_home">
        <NavLink exact to="/">
          <div className="angkor_flex">
            <img src={pictures.collection[12].imageUrl} alt="home"/>
            <div className="angkor_word">Home</div>
          </div>
        </NavLink>
        </div>
        <div className="pad">
          <button
          onClick={()=>{
            history.push("/business")
          }}
          >
            Explore
          </button>
        </div>

        <div className="pad">
          <button
            onClick={() => {
            if(sessionUser !==null) {
              history.push("/createBusiness")
            } else {
              setShowModal(true)
            }
            }}>
            Add Restaurant
          </button>
        </div>
      </div>

      {showModal && (
        <LoginModal onClose={() => setShowModal(false)}>
          <section className="review-modal-container">
            <button className="login-button-modal"
              onClick={() => {
                history.push("/login")
              }}
            >
              Login
            </button>
            <button className="login-button-modal"
              onClick={() => {
                history.push("/signup")
              }}
            >
              Sign Up
            </button>
            <button className="login-button-modal"
            onClick={demo}
            >
              Demo
            </button>
          </section>
          <img className="angkor-modal"src={pictures?.collection[13]?.imageUrl} />
        </LoginModal>
      )}



      <div className="profile-about">
      <AboutLinks />
      {isLoaded && sessionLinks}
      </div>

    </div>
  </nav>
  <nav className="small-screen">
    <div className="home-explore">
        <div className="angkor_home">
        <NavLink exact to="/"><img src={pictures.collection[12].imageUrl} alt="home"/></NavLink>
        </div>
        <div className="pad">
        <NavLink to="/business"><i className="fas fa-search fa-lg"></i></NavLink>
        </div>
        <div className="pad">
        <NavLink to="/createBusiness"><i className="fas fa-map-marked-alt fa-lg"></i></NavLink>
        </div>
        <div className="user-centered">
        {isLoaded && sessionLinks}
        </div>
        <div className="user-centered">
        <AboutLinks />
        </div>
    </div>
  </nav>
  </>
  );

  // only show sessionLink if check app has loaded
  // isLoaded runs before restoreUser runs. B/c we run our jsx before our logic.
  // want basic functionality of web to work first before user logins
}

export default Navigation;
