import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
// import './Navigation.css';
import { useHistory } from 'react-router';
import EditOneReview from "../EditOneReview";
import { NavLink } from "react-router-dom";
import './DotDotButton.css'
// import * as reviewActions from '../../store/review'
import { deleteReview } from "../../store/review";

function DotDotButton({businessId, reviewId}) {
  const dispatch = useDispatch();
  const history = useHistory();

  // false = menu is hidden
  const [showMenu, setShowMenu] = useState(false);

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

   const handleDeleteReview = (businessId, reviewId) => {
     dispatch(deleteReview(businessId, reviewId));
    history.push(`/business/${businessId}`)
  }
  return (
    <>
      <button onClick={openMenu}>
        <div className="dotStyle">
          <i class="fas fa-ellipsis-h fa-2x"></i>
        </div>
      </button>
      {showMenu && (
        <ul className="review-dropdown">
          <li>
            <NavLink to={`/business/${businessId}/reviews/${reviewId}`}><div className="dot-edit">Edit</div><i class="fas fa-edit"></i></NavLink>
          </li>
          <li>
            <button onClick={() => {handleDeleteReview(businessId, reviewId)}}>Delete</button>
          </li>
        </ul>
      )}
    </>
  )

}
export default DotDotButton
