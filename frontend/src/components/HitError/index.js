import pictures from '../../data/pictures'
import AllMapContainer from '../AllMaps'
import {errorMessage as allMarkers} from '../../data/errorMessage'
import './HitError.css'

function HitError () {

  return (
    <>
    <div className="signup-pic-container" style={{ backgroundImage: `url('${pictures.collection[6].imageUrl}')` }}>
      <div className="explore">404</div>
    </div>

    <div className="error-map-container">
    <AllMapContainer allMarkers={allMarkers}/>
    </div>





    </>
  )
}

export default HitError
