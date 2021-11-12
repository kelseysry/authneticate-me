import pictures from '../../data/pictures'
import './HomePage.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBusinesses } from '../../store/business';
import {useEffect } from 'react';
import OneBusinessTile from '../OneBusinessTile';

const HomePage = () => {
  const dispatch = useDispatch();

  const businessObj = useSelector((state) => state.business);
  console.log("businessHome", businessObj)

  const businesses = Object.values(businessObj)
  console.log("business", businesses)

  useEffect(() => {
    dispatch(getAllBusinesses())
  }, [dispatch])



  return (
    // <img src ={pictures.collection[0].imageUrl} alt={"hiii"}/>
    <>
    <div className="top-pie-container" style={{ backgroundImage: `url('${pictures.collection[0].imageUrl}')` }}>
      <div className="explore">Mab Mab</div>
    </div>
    <div className="splash-business-tiles-container">
      <div className="home-splash-each-image-title">
      <OneBusinessTile businessId={1}/>
      </div>
      <OneBusinessTile businessId={2}/>
      <OneBusinessTile businessId={3}/>
    </div>


    </>
  )


}

export default HomePage
