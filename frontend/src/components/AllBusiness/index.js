import {useEffect } from 'react'; // side effects
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//dispatch  - send request to redux store.
// useSelector - grab info loaded into the store
// import {useParams } from 'react-router-dom';

// import thunk creator
import { getAllBusinesses } from '../../store/business';

import './AllBusiness.css'
import pictures from '../../data/pictures'
import OneBusinessTile from '../OneBusinessTile';
import { clearReviews } from '../../store/review';

const AllBusiness = () => {
  // declare variables from hooks
  const dispatch = useDispatch();

  // grab businesses from store using useSelector
  const businessObj = useSelector((state) => state.business)

  // if want array version of business
  const businesses = Object.values(businessObj)
  // console.log("this is from components", businesses)

  // const reviewsObj = useSelector((state) => state.review)
  // const reviews = Object.values(reviewsObj)
  // console.log("reviewsAllBusiness", reviews)


  // after the component return () below has been rendered for the first time,
  //useEffect will dispatch the thunk


  useEffect(() => {
    dispatch(getAllBusinesses())
    dispatch(clearReviews())
  }, [dispatch, businessObj.length])


  return (

    <>
    <div className="container-banner">

      <div className="top-banner-pic-all-business" style={{ backgroundImage: `url('${pictures.collection[2].imageUrl}')` }}>
        <div className="explore">Explore</div>
      </div>

    </div>


      <div className="one-business-image-container">


          {businesses.map((business) =>
          // {business &&

           // {
              // business.id &&
                <div className="one-image-container" key={business?.id}>

              <NavLink to={`/business/${business?.id}`}><OneBusinessTile businessId={business?.id}/></NavLink>
          </div>

          //  }
          // }

          )}
      </div>


    </>
  )


}
export default AllBusiness
