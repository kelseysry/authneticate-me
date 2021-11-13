import pictures from '../../data/pictures'

function HitError () {

  return (
    <>
    <div className="signup-pic-container" style={{ backgroundImage: `url('${pictures.collection[6].imageUrl}')` }}>
      <div className="explore">Zoom Out!</div>
    </div>

    


    </>
  )
}

export default HitError
