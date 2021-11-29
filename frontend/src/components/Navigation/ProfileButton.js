// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';
import { useHistory } from 'react-router';


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [showMenu, setShowMenu] = useState(false);
  // false = menu is hidden

  const openMenu = () => { // invoked by the onClick in the html button, opens menu
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false); // trigger closing of dropdown menu
    };

    // register event listener for click events on the entire page (document)
    // so can close the dropdown menu if click anywhere on the page.
    document.addEventListener('click', closeMenu);

    // cleanup function for the useEffect should remove this event listener
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  async function logout (e) {

    e.preventDefault();

       await dispatch(sessionActions.logout());

        history.push("/login")
  }




  return (
    <>
      <div className="user-centered">
      <button onClick={openMenu}>
        <i className="fas fa-user-circle"></i>
      </button>
      </div>
      {showMenu && (
          <ul className="profile-dropdown">
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>
                <button onClick={logout}><i className="fas fa-power-off fa-2x"></i></button>
            </li>
          </ul>
      )}
    </>
  );
}

export default ProfileButton;
