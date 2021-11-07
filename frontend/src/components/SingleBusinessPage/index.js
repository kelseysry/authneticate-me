import {useEffect } from 'react'; // side effects

import { useDispatch, useSelector } from 'react-redux';
//dispatch  - send request to redux store.
// useSelector - grab info loaded into the store
import {useParams } from 'react-router-dom';

// import thunk creator
import { getOneBusiness } from "../../store/business"
import { useHistory } from 'react-router';


const SingleBusinessPage = () => {
  const dispatch = useDispatch();
  const { businessId } = useParams();
  const business = useSelector((state) => state.business[businessId]);
  const history = useHistory();

  useEffect(() => {
    dispatch(getOneBusiness(businessId));
  }, [dispatch]);
  console.log("this is business", business)
  console.log("this is ID", businessId)




  return (
    <div
    // style={{ backgroundImage: `url('${business.imageUrl}')` }}
    >
    <h1>{business?.title}</h1>


    <button onClick={() => {history.push("/business");}}>Click</button>
    

    <p>{business?.description}</p>
    <img src ={business?.imageUrl}/>

  </div>

  )

  }

export default SingleBusinessPage
