import pictures from '../../data/pictures'
import './PicBanner.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBusinesses } from '../../store/business';
import {useEffect } from 'react';


const PicBanner = () => {
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
    <div className="top-pi-container" style={{ backgroundImage: `url('${pictures.collection[3].imageUrl}')` }}>

    </div>
    </>
  )


}

export default PicBanner
