import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getReviews } from "../../store/review";

// import ReviewForm from "../CreateReview";
import './AllReviews.css';


const BusinessReviews = ({business}) => {

  const dispatch = useDispatch();
  const reviewsObj = useSelector((state) => state.review)

  const reviews = Object.values(reviewsObj)
  console.log("review components", reviews)

  useEffect(() => {
    dispatch(getReviews(business.id))
  },[dispatch])

  return (
  <>
  <h1>Reviews in BusinessReviews component</h1>
   <div>
    {reviews.map((review) => (
      <div className="review-container">
      <ul>
        <li>
          <div >
          <b>User</b> {review.User.username}
          </div>
          <div>
          <b>Rating</b> {review.rating}
          </div>
          <div className="review-container">
          {review.answer}
          </div>
          <div className="image-container">
            <img className="reviewImage" src ={review.imageUrl} alt={review.imageUrl}/>
          </div>
        </li>
      </ul>
      </div>
    ))}
  </div>
    </>
  )

   }

export default BusinessReviews
