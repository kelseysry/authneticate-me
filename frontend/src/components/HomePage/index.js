import pictures from '../../data/pictures'
import './HomePage.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBusinesses } from '../../store/business';
import {useEffect } from 'react';


const HomePage = () => {
  const dispatch = useDispatch();

  const businessObj = useSelector((state) => state.business);
  console.log("businessHome", businessObj)

  const businesses = Object.values(businessObj)
  console.log("business", businesses)

  useEffect(() => {
    dispatch(getAllBusinesses())
  }, [dispatch])

  //  const businessLat = businesses.map((business) => business.lat)
  //   console.log("lat", businessLat)

  //   const businessLng = businesses.map((business) => business.lng)

    // const bLat = businesses[0].id
    // console.log("bLat", bLat)

    // const directions = {  {lat:12, lng:13}, {lat:11, lng:14}  }


  return (
    // <img src ={pictures.collection[0].imageUrl} alt={"hiii"}/>
    <>
    <div className="top-pi-container" style={{ backgroundImage: `url('${pictures.collection[0].imageUrl}')` }}>
    <div className="explore">Explore</div>
    </div>
    </>
  )


}

export default HomePage
