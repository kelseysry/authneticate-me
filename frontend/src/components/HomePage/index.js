import pictures from '../../data/pictures'
import './HomePage.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBusinesses } from '../../store/business';
import {useEffect } from 'react';
import OneBusinessTile from '../OneBusinessTile';
import AllMapContainer from '../AllMaps';
import allMarkers from '../../data/markers';



const HomePage = () => {
  const dispatch = useDispatch();

  const businessObj = useSelector((state) => state.business);
  // console.log("businessHome", businessObj)

  const businesses = Object.values(businessObj)
  // console.log("business", businesses)

  const busPic = businesses.map(business => business?.imageUrl)
  console.log("busPic", busPic)

  // title: "Best Iced Coffee"
  // const busTitle = businesses.map(business => ({"title":business.title}))
  const busTitle = businesses.map(business => (business?.title))

  // console.log("busTItle", busTitle)

  const busLat = businesses.map(business => business?.lat)
  // console.log("business lat", busLat)

  const busLng = businesses.map(business => business?.lng)
  // console.log("business lng", busLng)

  // combine lat and lng into  {lat: 11.540526555498468, lng: 104.91522593956448}
  const coordinates = busLat.map(function(lat, i) {
    return {lat:parseFloat(lat), lng:parseFloat(busLng[i])};
  })

  // console.log("coordinates", coordinates)
  // ['11.558446528422527', '104.92501818402742']

  // position: {lat: 11.53997, lng: 104.914864}
  const positionAdded = coordinates.map(coordinate => ({"position": coordinate}))
// console.log("position", positionAdded)

// {  {position:{lat:11, lng:104}, {title:"The best ice coffee"}}, {position, title}  }
const coordinate_title = positionAdded.map(function(position,i) {
  return {position, "title":busTitle[i]};
})

const markerData = coordinate_title.map(function(marker, i) {
  return {marker, "image":busPic[i]}
})

// console.log("combined", markerData)

  useEffect(() => {
    dispatch(getAllBusinesses())
  }, [dispatch])



  return (
    // <img src ={pictures.collection[0].imageUrl} alt={"hiii"}/>

    // small screen
    <>

    <div className="top-pie-container" style={{ backgroundImage: `url('${pictures.collection[0].imageUrl}')` }}>
      <div className="explore">Mab Mab</div>
    </div>
    <div className="top-pie-container2" style={{ backgroundImage: `url('${pictures.collection[8].imageUrl}')` }}>
        <div className="caption">I worked for about a year in Phnom Penh, Cambodia and became pretty well acquainted with all the restaurants there since I ate out for dinner daily. Food in Cambodia is incredibly fresh and cheap! I always bring my camera with me when I eat out so I managed to take a snapshot of all the meals I had in Cambodia and added these photos as my seeder data. The name Mab Mab is play on words from the Cambodian word "cah mab." "Cah mab" means fat in the Khmer language. It's typical to have your elder nickname you "mab mab" in a cute and endearing way.
          <div>
            <i class="fas fa-map-marker-alt fa-2x"></i>
          </div>
          <span className="click-marker">
            Click on a marker to see a restaurant!
          </span>
        </div>
     </div>

{/* big screen */}
    <div className="map-and-about">
      <div className ="map-home">
        <AllMapContainer allMarkers={markerData}/>
      </div>
      <div className="about-container">
        <div className="about">

            <div className="about-details"style={{ backgroundImage: `url('${pictures.collection[8].imageUrl}')` }} >

          <div className="captionBigScreen">

          <div>
                {/* <i class="fas fa-map-marker-alt fa-2x"></i> */}
              </div>
              {/* <span className="click-marker">
                Click on <i class="fas fa-map-marker-alt fa-2x"></i> to see a restaurant!
              </span> */}

              <div>
            <i class="fas fa-map-marker-alt fa-2x"></i>
          </div>
          <span className="click-marker">
            Click on a marker to see a restaurant!
          </span>



          {/* <span><i class="fas fa-utensils"></i>  About  <i class="fas fa-utensils"></i></span> */}

            I worked for about a year in Phnom Penh, Cambodia and became pretty well acquainted with all the restaurants there since I ate out for dinner daily. Food in Cambodia is incredibly fresh and cheap! I always bring my camera with me when I eat out so I managed to take a snapshot of all the meals I had in Cambodia and added these photos as my seeder data. The name Mab Mab is play on words from the Cambodian word "cah mab." "Cah mab" means fat in the Khmer language. It's typical to have your elder nickname you "mab mab" in a cute and endearing way.

            </div>

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
