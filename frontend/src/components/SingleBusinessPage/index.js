import {useEffect } from 'react'; // side effects

import { useDispatch, useSelector } from 'react-redux';
//dispatch  - send request to redux store.
// useSelector - grab info loaded into the store
import {useParams } from 'react-router-dom';

// import thunk creator 
import { getOneBusiness } from "../../store/business"


const SingleBusinessPage = () => {
  const dispatch = useDispatch();
  const { businessId } = useParams();
  const business = useSelector( state => state.business[businessId])

  useEffect(() => {
    dispatch(getOneBusiness(businessId));
  }, [dispatch, businessId]);

  return (
    <div
    className="business-image"
    // style={{ backgroundImage: `url('${business.imageUrl}')` }}
    >
    <p>{business.description}</p>
    <p>Hello</p>
  </div>

  )

  }

export default SingleBusinessPage
