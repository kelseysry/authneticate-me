import { useState, useEffect } from 'react'; // side effects

import { useDispatch, useSelector } from 'react-redux';

//dispatch  - send request to redux store.
// useSelector - grab info loaded into the store
// import {useParams, Redirect } from 'react-router-dom';
import {useParams} from 'react-router-dom';
// import {Redirect} from 'react-router-dom';

// import thunk creator
import { getOneBusiness } from "../../store/business"
import { useHistory } from 'react-router';

import { deleteBusiness } from '../../store/business';
import BusinessReviews from '../AllReviews';
import EditBusinessForm from '../EditBusinessForm';
import ReviewForm from "../CreateReview";
import './SingleBusiness.css';
import { getReviews } from '../../store/review';
import MapContainer from '../Maps';



const SingleBusinessPage = () => {

    const { businessId } = useParams();
    const sessionUser = useSelector(state => state.session.user); // first argument always state -> session from index.js in store, .user is from initial state in reducer for sessionReducer
  const business = useSelector((state) => state.business[businessId]);

  const [showEditBusinessForm, setShowEditBusinessForm] = useState(false)

  const dispatch = useDispatch();
  const history = useHistory();

  const reviewsObj = useSelector((state) => state.review)
  console.log("reviewObj", reviewsObj)
  const reviews = Object.values(reviewsObj)
  const [showReviewForm, setShowReviewForm] = useState(false)

  const [hideReviewButton, setHideReviewButton] = useState(false)


  // hide create a review button
  useEffect(() => {
    setHideReviewButton(false)
  },[dispatch, reviews.length])

// getOneBusiness
  useEffect(() => {
    dispatch(getOneBusiness(businessId));
  }, [dispatch, businessId]);

// Show Business Form
  useEffect(() => {
    setShowEditBusinessForm(false)
  },[dispatch,businessId])

  //trying to hide review form
  useEffect(() => {
    setShowReviewForm(false)
  },[dispatch,businessId])

  useEffect(()=> {
    dispatch(getReviews(businessId))
  }, [dispatch,businessId])


  if(!reviews) {
    return null;
  }

  if (!business) {
    return null;
  }

  console.log("singleBUsiness",sessionUser)

  // if (!sessionUser) return <Redirect to="/" />;


  // if(!sessionUser) {
  //   history.push("/")
  // }


  // array of all the reviews associated with the business
  // console.log("business singleBusinessPage", reviews)

  let res = reviews.map(review => Object.values(review)[3])
  // console.log("this is res", res)
  const avge = (res.reduce((a,b) => a+b, 0)) /res.length
  const average = Math.round(avge)

  // console.log(average)

// console.log("average", average)

  let content = null;
  let reviewContent = null;

  if(showEditBusinessForm && business) {
    content = (
      <EditBusinessForm business={business} hideForm={() => setShowEditBusinessForm(false)}/>
    )
  } else {
    content = (
      <>
      <div className="details-container">
        <div className ="details-container-text">
          <h1 className="header-details">Details</h1>
          <ul>
            <li className="header-details">
              <b>Owner</b> {business.User?.username}
            </li>
            <li>
              <b>Description</b> {business.description}
            </li>
            <li>
              <b>Address</b> {business.address}
            </li>
            <li>
              <b>City</b> {business.city}
            </li>
            <li>
              <b>zipCode</b> {business.zipCode}
            </li>
          </ul>
        </div>
      </div>
      </>
    )
  }


  if(showReviewForm && reviews) {
    // console.log("this is reviews in component", reviews)

    reviewContent = (
      <ReviewForm reviews={reviews} hideForm={() => setShowReviewForm(false)} hideButton={() => setHideReviewButton(false)}/>
    )
  }
  // console.log("this is reviews.User", reviews[0].User.username)

  // deleteBusiness thunk
  const handleDelete = (businessId) => {
    dispatch(deleteBusiness(businessId));
    history.push("/")
  }

  // console.log("business.latt", business.lat)


  return (
    <>
      <div className="single-top-pic-container" style={{ backgroundImage: `url('${business?.imageUrl}')` }}>
        <div className="business-title">
          {business.title}
        </div>
        { reviews.length?
            <div className="rating">
              {reviews.length && average && Array(average).fill(<i className="fas fa-star"></i>).map((ele, idx) => <span key={idx}>{ele}</span> )}
            </div>
          : null
        }
        <div>
        <button className="edit-business-title" onClick={() => setShowEditBusinessForm(true)}>Edit Business</button>
        <button className="edit-business-title" onClick={() => handleDelete(businessId)}>Delete Business</button>
        </div>
      </div>

      <div className="details-reviewButton-container">
        <div className="details">
            <div>
              {content}
            </div>


              {!hideReviewButton && <button className="add-review-button"
              //  onClick={() => setHideReviewButton(true)}
               onClick={() => {setShowReviewForm(true);  setHideReviewButton(true)

               }}>
               <i className="fas fa-star"></i>  Write a Review</button>
               }

        <div>
          {reviewContent}
          <BusinessReviews reviews={reviews} business={business}/>
        </div>
        </div>

        <div className="map">
            <MapContainer BusinessLat={business.lat} BusinessLng={business.lng}/>
        </div>


      </div>

  </>
  )

  }

export default SingleBusinessPage
