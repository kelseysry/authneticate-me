import {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllBusinesses } from '../../store/business';

import './AllBusiness.css'
import pictures from '../../data/pictures'
import OneBusinessTile from '../OneBusinessTile';
import { clearReviews } from '../../store/review';

const AllBusiness = () => {


  const [filterRatings, setFilterRatings] = useState(0);
  const [hover, setHover] = useState(0);

  // declare variables from hooks
  const dispatch = useDispatch();

  // grab businesses from store using useSelector
  const businessObj = useSelector((state) => state.business)

  // if want array version of business
  const businesses = Object.values(businessObj)

  useEffect(() => {
    dispatch(getAllBusinesses())
    dispatch(clearReviews())
  }, [dispatch, businessObj.length])


  const handleClick = () => {
    if(filterRatings === 1) {
      setFilterRatings(0);
    }
  }


  return (

    <>
    <div className="container-banner">

      <div className="top-banner-pic-all-business" style={{ backgroundImage: `url('${pictures.collection[2].imageUrl}')` }}>
        <div className="explore">Explore</div>
        <section className="filter-by-stars">
          {Array(5).fill(<img src={pictures.collection[9].imageUrl} alt="independence_monument_star"/>).map((ele, idx) => {
            idx += 1;
            return (
              <button
                key={idx}
                className={idx <= (hover || filterRatings) ? "color" : "noColor"}
                onClick={() => {
                  setFilterRatings(idx)
                  handleClick()

                }}
                onMouseEnter={() => setHover(idx)}
                onMouseLeave={() => setHover(filterRatings)}
              >
                <span className={idx <= (hover || filterRatings) ? "color" : "noColor"}><img src={pictures.collection[9].imageUrl} alt="independence_monument_star"/> </span>
              </button>
            );
          })}
        </section>
      </div>
    </div>

      <div className="one-business-image-container">
          {businesses.map((business) =>
            <OneBusinessTile businessId={business?.id} filterAvg={filterRatings}/>
          )}
      </div>


    </>
  )


}
export default AllBusiness
