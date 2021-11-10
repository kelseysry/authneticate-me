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

const AllBusiness = () => {
  // declare variables from hooks
  const dispatch = useDispatch();

  // grab businesses from store using useSelector
  const businessObj = useSelector((state) => state.business)

  // if want array version of business
  const businesses = Object.values(businessObj)
  console.log("this is from components", businesses)

  const reviewsObj = useSelector((state) => state.review)
  const reviews = Object.values(reviewsObj)
  console.log("reviewsAllBusiness", reviews)


  // after the component return () below has been rendered for the first time,
  //useEffect will dispatch the thunk
  useEffect(() => {
    dispatch(getAllBusinesses())
  }, [dispatch])


  let res = reviews.map(x => Object.values(x)[3])
  console.log("this is res", res)
  const avge = (res.reduce((a,b) => a+b, 0)) /res.length
  const average = Math.round(avge)


  console.log("averageAllBusiness", average)

  console.log("businessesAllBu", businesses)

  return (
    <>
      <div className="top-business-container" style={{ backgroundImage: `url('${pictures.collection[2].imageUrl}')` }}>
        <div className="explore">Explore</div>
      </div>
      <div className="business-image-container">
          {businesses.map((business) =>
          <div className="one-image-container" key={business.id}>

<NavLink to={`/business/${business.id}`}><OneBusinessTile businessId={business.id}/></NavLink>




          </div>
          )}
      </div>


    </>
  )


}

// just simple mapping out images

{/* <div>
{businesses.map((business) =>
<div key={business?.id}>
  <img src ={business.imageUrl} alt={business.imageUrl}/>
</div>
)}
</div>
<div>
</div> */}



{/* <div className="business-image-container">
{businesses.map((business) =>
<div className="one-image-container" key={business.id}>
  <div>
  <NavLink to={`/business/${business.id}`}>{<img className="each-image" src ={business.imageUrl} alt={business.imageUrl}/>}</NavLink>
  </div>
  <div className="each-business-details">
  {business.description}
  </div>
</div>
)}
</div>
 */}


export default AllBusiness
