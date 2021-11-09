import pictures from '../../data/pictures'

console.log("pictures", pictures)

const HomePage = () => {


  return (
    // <div>hi</div>
    <img src ={pictures.collection[0].imageUrl} alt={"hiii"}/>
    // <img src={image.baseimageurl} key={image.imageid} alt={art.title} />
  )


}

export default HomePage
