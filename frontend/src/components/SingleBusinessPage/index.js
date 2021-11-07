import { useState, useEffect } from 'react'; // side effects

import { useDispatch, useSelector } from 'react-redux';
//dispatch  - send request to redux store.
// useSelector - grab info loaded into the store
import {useParams } from 'react-router-dom';

// import thunk creator
import { getOneBusiness } from "../../store/business"
// import { useHistory } from 'react-router';

import EditBusinessForm from '../EditBusinessForm';


const SingleBusinessPage = () => {
  const { businessId } = useParams();
  const business = useSelector((state) => state.business[businessId]);
  const [showEditBusinessForm, setShowEditBusinessForm] = useState(false)
  const dispatch = useDispatch();
  // const history = useHistory();

  useEffect(() => {
    dispatch(getOneBusiness(businessId));
  }, [dispatch]);


  useEffect(() => {
    setShowEditBusinessForm(false)
  },[businessId])

  // idk
  if (!business) {
    return null;
  }

  let content = null;


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

    <button onClick={() => setShowEditBusinessForm(true)}>Editttttt</button>
    <p>{business?.description}</p>
    <img src ={business?.imageUrl}/>
  </div>

  )

  }

export default SingleBusinessPage
