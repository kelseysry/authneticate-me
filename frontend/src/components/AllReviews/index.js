import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getReviews } from "../../store/review";

const BusinessReviews = ({business}) => {

  const dispatch = useDispatch();
  const reviewsObj = useSelector((state) => state.review)
  const reviews = Object.values(reviewsObj)

  console.log("this is reviews in single", reviews)



  // const businessObj = useSelector((state) => state.business)

  // // if want array version of business
  // const businesses = Object.values(businessObj)

  useEffect(() => {
    dispatch(getReviews(business.id))
  },[dispatch])

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
