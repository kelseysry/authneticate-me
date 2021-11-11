import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'; // side effects

import { getOneBusiness } from "../../store/business"
import { getReviews } from "../../store/review";


import './OneBusinessTile.css';


// mistakesesese

const OneBusinessTile = ({businessId}) => {
  const dispatch = useDispatch();

  // use {business.id}
  // let id = 2
  // let id = businessId

const business = useSelector((state) => state.business[businessId]);
// console.log("businessOneTile",business)

// const reviewsObj = useSelector((state) => state.review)
// // console.log("reviewObj", reviewsObj)
// const reviews = Object.values(reviewsObj)

  // getOneBusiness
  useEffect(() => {
    dispatch(getOneBusiness(businessId));
  }, [dispatch, businessId]);

  // // get all reviews
  // useEffect(() => {
  //   dispatch(getReviews(businessId))
  // },[dispatch,businessId])


  // if(!reviews) {
  //   return null;
  // }

  if (!business) {
    return null;
  }

  // let res = reviews.map(x => Object.values(x)[3])
  // console.log("this is res", res)
  const avge = (business?.Reviews.reduce((a,b) => a+b.rating, 0)) /business.Reviews.length
  const average = Math.round(avge)

  // console.log(average)

  // console.log("average", reviews)
  // console.log("business",business )


  return (
    <>
      <div className="top-pic-container" style={{ backgroundImage: `url('${business?.imageUrl}')` }}>
        <div className="invid-business-title">
          {business.title}
        </div>
        {
          business.Reviews.length?
          <div className="rating">

        {business.Reviews.length && average && Array(average).fill(<i className="fas fa-star"></i>).map((ele, idx) => <span key={idx}>{ele}</span> )}
        </div>
        : null
        }

      </div>
    </>
  )


  }


export default OneBusinessTile
