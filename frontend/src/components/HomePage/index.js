import pictures from '../../data/pictures'
import './HomePage.css'
import MapContainer from '../Maps'
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



  return (
    <>
    <div className="top-pie-container" style={{ backgroundImage: `url('${pictures.collection[0].imageUrl}')` }}>
     <div className="explore">Mab Mab</div>
    </div>
    </>
  )


}

export default HomePage
