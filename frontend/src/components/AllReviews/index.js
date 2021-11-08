import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getReviews } from "../../store/review";

import ReviewForm from "../CreateReview";

const BusinessReviews = ({business}) => {

  const dispatch = useDispatch();
  const reviewsObj = useSelector((state) => state.review)
  const reviews = Object.values(reviewsObj)

  const [showReviewForm, setShowReviewForm] = useState(false)

  //trying to hide review form
  useEffect(() => {
    setShowReviewForm(false)
  },[business.id])


  useEffect(() => {
    dispatch(getReviews(business.id))
  },[dispatch])

  if(!reviews) {
    return null;
  }

  let content = null;

  if(showReviewForm && reviews) {
    content = (
      <ReviewForm reviews={reviews} hideForm={() => setShowReviewForm(false)} />
    )
  } else {
    content = (
      <div>
        <h2>Reviews</h2>
        <ul>
          <li>
            <b>Rating</b>{reviews.rating}
          </li>
        </ul>
      </div>
      // finish this up, might be a little weird because you have to map out
    )
  }

  return (
    <div>
        <h1>Reviews</h1>
        {/* <div>
        {reviews.map((review,index) =>
        <div key={index}>
          <img src ={review.imageUrl} alt={review.imageUrl}/>
        </div>
        )}
      </div> */}

      <div>
        {reviews.map((review) => review.answer)}
      </div>

    </div>
  )
}


export default BusinessReviews
