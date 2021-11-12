import pictures from '../../data/pictures'
import './HomePage.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBusinesses } from '../../store/business';
import {useEffect } from 'react';
import OneBusinessTile from '../OneBusinessTile';
// import MapContainer from '../Maps';
import AllMapContainer from '../AllMaps';
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

    <div className="map-and-about">
      <div className ="map-home">
      <AllMapContainer />
      </div>
      <div className="about-container">
        <div className="about">
            <div className="about-header">
              About
            </div>
            <div className="about-details">
            I worked for about a year in Phnom Penh, Cambodia and became pretty well acquainted with all the restaurants there since I ate out for dinner daily. Food in Cambodia is incredibly fresh and cheap! I always bring my camera with me when I eat out so I managed to take a snapshot of all the meals I had in Cambodia and added these photos as my seeder data. The name Mab Mab is play on words from the Cambodian word "cah mab." "Cah mab" means fat in the Khmer language. It's typical to have your elder nickname you "mab mab" in a cute and endearing way.
            </div>
        </div>
      </div>
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
