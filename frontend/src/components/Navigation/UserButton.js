import React, {useState, useEffect} from "react"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import * as sessionActions from '../../store/session'

function UserButton() {
  const dispatch = useDispatch();

  const [showMenu, setShowMenu ] = useState(false);
  // false = menu is hidden

  const sessionUser = useSelector(state => state.session.user)

  function demo () {

    dispatch(sessionActions.login({
    credential: 'Demo-lition',
    password: 'password'
  }));
  }




  const openMenu = () => {
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

  return (

    <>
     <button onClick={openMenu}>
        <i class="fas fa-user-plus fa-2x"></i>
      </button>

      {showMenu && (
    <div className="sign-up-login-container">
      <div className="sign-log-style">
      <NavLink to="/login">Log In</NavLink>
      </div>
      <div className="sign-log-style">
      <NavLink to="/signup">Sign Up</NavLink>
      </div >
      <div className="sign-log-style-buttonN">
        <button onClick={demo}>Demo</button>
      </div>
    </div>

      )}


    </>

  )


}

export default UserButton
