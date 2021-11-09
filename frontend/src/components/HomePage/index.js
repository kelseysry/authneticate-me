import pictures from '../../data/pictures'
import './HomePage.css'

const HomePage = () => {


  return (
    // <img src ={pictures.collection[0].imageUrl} alt={"hiii"}/>
    <>
    <div className="top-pi-container" style={{ backgroundImage: `url('${pictures.collection[0].imageUrl}')` }}>

    </div>
    <div>Hello </div>
    </>
  )


}

export default HomePage
