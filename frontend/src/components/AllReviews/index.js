import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getReviews } from "../../store/review";

// import ReviewForm from "../CreateReview";

const BusinessReviews = ({business}) => {

  const dispatch = useDispatch();
  const reviewsObj = useSelector((state) => state.review)

  const reviews = Object.values(reviewsObj)
  console.log("review components", reviews)

  useEffect(() => {
    dispatch(getReviews(business.id))   // thunk dispatched here!
  },[dispatch])

  return (
  <>
  <h1>Reviews in BusinessReviews component</h1>
   <div>
    {reviews.map((review) => (
      <ul>
        <li>
          <b>Answer</b> {review.answer}
        </li>
        <li>
          <b>Rating</b> {review.rating}
        </li>
        <li>
        </li>
          <li>
            <b>User</b> {review.User.username}
          </li>
        <div>
        <img src ={review.imageUrl} alt={review.imageUrl}/>
        </div>
      </ul>
    ))}
  </div>
    </>
  )

   }

export default BusinessReviews
