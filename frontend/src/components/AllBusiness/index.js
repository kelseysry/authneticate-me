import {useEffect } from 'react'; // side effects

import { useDispatch, useSelector } from 'react-redux';
//dispatch  - send request to redux store.
// useSelector - grab info loaded into the store
import {useParams } from 'react-router-dom';

// import thunk creator
import { getAllBusinesses } from '../../store/business';

const AllBusiness = () => {
  // declare variables from hooks
  const dispatch = useDispatch();

  // grab businesses from store using useSelector
  const businessObj = useSelector((state) => state.business)

  // if want array version of business
  const businesses = Object.values(businessObj)
  console.log("this is from components", businesses)

  // after the component return () below has been rendered for the first time,
  //useEffect will dispatch the thunk
  useEffect(() => {
    dispatch(getAllBusinesses())
  }, [dispatch])

  return (
    <>
      <div>
        {businesses.map((business) =>
        <img src ={business.imageUrl}/>
        )}
      </div>
      <div>
        {/* {businesses[1].description} */}
      </div>
    </>
  )


}

///  imageUrl


export default AllBusiness
