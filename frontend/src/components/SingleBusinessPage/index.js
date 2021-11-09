import { useState, useEffect } from 'react'; // side effects

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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


const SingleBusinessPage = () => {

  const { businessId } = useParams();
  const business = useSelector((state) => state.business[businessId]);

  const [showEditBusinessForm, setShowEditBusinessForm] = useState(false)
  const dispatch = useDispatch();
  const history = useHistory();

  const reviewsObj = useSelector((state) => state.review)
  const reviews = Object.values(reviewsObj)
  const [showReviewForm, setShowReviewForm] = useState(false)

// getOneBusiness
  useEffect(() => {
    dispatch(getOneBusiness(businessId));
  }, [dispatch, businessId]);

// Show Business Form
  useEffect(() => {
    setShowEditBusinessForm(false)
  },[businessId])

  //trying to hide review form
  useEffect(() => {
    setShowReviewForm(false)
  },[businessId])


  if(!reviews) {
    return null;
  }

  if (!business) {
    return null;
  }

  let content = null;
  let reviewContent = null;

  if(showEditBusinessForm && business) {
    content = (
      <EditBusinessForm business={business} hideForm={() => setShowEditBusinessForm(false) }/>
    )
  } else {
    content = (
      <div>
            {/* <img src ={business?.imageUrl} alt= "single business pic"/> */}

        <h2>Information</h2>
        <ul>
          <li>
            {/* <b>Title</b> {business.title} */}
          </li>
          <li>
            <b>Owner</b> {business.User.username}
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
          {/* <li>
            <b>Image Url</b> {business.imageUrl}
          </li> */}
        </ul>

      </div>
    )
  }


  if(showReviewForm && reviews) {
    // console.log("this is reviews in component", reviews)

    reviewContent = (
      <ReviewForm reviews={reviews} hideForm={() => setShowReviewForm(false)} />
    )
  } else {
    reviewContent = (
      <div>
          {/* {reviews.map((review) => defaultReview)} */}
{/*
        <h2>Reviews</h2> {reviews.answer}
        <ul>
          <li>
            <b>Rating</b>{reviews.rating}
          </li>
        </ul> */}

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
    )
  }

  // console.log("this is reviews.User", reviews[0].User)
  // console.log("this is reviews.User", reviews[0].User.username)

  // deleteBusiness thunk
  const handleDelete = (businessId) => {
    dispatch(deleteBusiness(businessId));
    history.push("/")
  }

  // if (businessId == null) return <Redirect to="/" />;

  return (
    <>
      <div className="top-pic-container" style={{ backgroundImage: `url('${business?.imageUrl}')` }}>
        <div className="business-title">
          {business.title}
        </div>
        <div className="rating">
          Rating w/ Stars - Figure out this
        </div>
        {/* <div className="business-title">
          hello
        </div> */}
        {/* <Link > */}
        <div>
        <button className ="edit-business-title" onClick={() => setShowEditBusinessForm(true)}>Edit Business</button>
        </div>


      </div>


    {/* <h1>{business?.title}</h1> */}
    {/* <img src ={business?.imageUrl} alt= "single business pic"/> */}




    <div>
      {content}
    </div>
    <div>
      <button onClick={() => handleDelete(businessId)}>Delete Business</button>
    {/* </div>
    <button onClick={() => setShowEditBusinessForm(true)}>Edit Business</button>
    <div> */}
    <BusinessReviews business={business}/>
    <button onClick={() => setShowReviewForm(true)}>Add a Review</button>
    {reviewContent}
    </div>
    {/* <img src ={business?.imageUrl} alt= "single business pic"/> */}
  </>
  )

  }

export default SingleBusinessPage
