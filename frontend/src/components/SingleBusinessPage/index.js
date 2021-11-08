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
        <h2>Information</h2>
        <ul>
          <li>
            <b>Title</b> {business.title}
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
    reviewContent = (
      <ReviewForm reviews={reviews} hideForm={() => setShowReviewForm(false)} />
    )
  } else {
    reviewContent = (
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


  // deleteBusiness thunk
  const handleDelete = (businessId) => {
    dispatch(deleteBusiness(businessId));
    history.push("/")
  }

  // if (businessId == null) return <Redirect to="/" />;

  return (
    <div
    // style={{ backgroundImage: `url('${business.imageUrl}')` }}
    >
    <h1>{business?.title}</h1>
    {/* <EditBusinessForm /> */}


    {/* <button onClick={() => {history.push("/EditBusiness");}}>Edit Business</button> */}

    <div>
      {content}
    </div>
    <div>
      <button onClick={() => handleDelete(businessId)}>Delete</button>
    </div>

    <button onClick={() => setShowEditBusinessForm(true)}>Edit</button>
    {/* <p>{business?.description}</p> */}
    <div>
    <BusinessReviews business={business}/>
    {reviewContent}
    </div>
    <img src ={business?.imageUrl} alt= "single business pic"/>
  </div>

  )

  }

export default SingleBusinessPage
