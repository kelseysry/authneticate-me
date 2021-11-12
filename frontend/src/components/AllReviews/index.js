import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getReviews } from "../../store/review";

// import ReviewForm from "../CreateReview";
import './AllReviews.css';

// weird bug

const BusinessReviews = ({business}) => {

  const dispatch = useDispatch();
  const reviewsObj = useSelector((state) => state.review)



  const reviews = Object.values(reviewsObj).filter(review => review.businessId === business.id)
  console.log("review components", reviews)

  useEffect(() => {
    dispatch(getReviews(business.id))
  },[dispatch, business.id])

  console.log("reviews in allReview Component", reviews)

  return (

   <div>
    {reviews.map((review) =>
      <div className="review-container" key={review.id}>
        <ul>
          <li>
            <div className="profile">
              <span className="icon">
              <i className="far fa-user-circle fa-lg"></i>
              {/* <i class="fas fa-utensils"></i> */}
              </span>
              <span className="review-username">
              {review.User.username}
              </span>
            </div>
            <div className="rating-profile">
              {/* <b>Rating</b>  */}
              {Array(review.rating).fill(

              <span className="star-color-blue"><i className="fas fa-star fa-xs"></i></span>).map((ele, idx) => <span key={idx}>{ele}</span>)

             }
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
    )}
  </div>

  )

   }

export default BusinessReviews
