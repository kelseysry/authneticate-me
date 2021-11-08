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
    <div>
        <h1>Past Reviews in BusinessReviews component</h1>
        <div>
        {reviews.map((review,index) =>
        <div key={index}>
          <img src ={review.imageUrl} alt={review.imageUrl}/>
        </div>
        )}
      </div>

      <div>
        {reviews.map((review) => review.answer)}
      </div>

    </div>
  )

   }

export default BusinessReviews
