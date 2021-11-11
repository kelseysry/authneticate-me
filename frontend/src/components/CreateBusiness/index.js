import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import isURL from 'validator/es/lib/isURL';
import { createOneBusiness } from '../../store/business';

import { useDispatch, useSelector } from "react-redux";
import './CreateBusinessForm.css'
// import HomePage from '../HomePage';
import PicBanner from '../PicBanner';

const CreateBusinessForm = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  // const [ownerId, setOwnerId] = useState('')
  const [errors, setErrors] = useState([])
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  console.log("this is sessionUser", sessionUser)
  console.log("this is sessionUserId", sessionUser?.id)
  const ownerId = sessionUser?.id


  useEffect(() => {
    const validationErrors = []
    if(!title) validationErrors.push("Name is required")
    if(title.length<4) validationErrors.push("Name must be more than 4 characters long")
    if(title.length >100) validationErrors.push("Name must be less than 100 characters")
    if(!address) validationErrors.push("Address is required")
    if(!city) validationErrors.push("City is required")
    if(!zipCode) validationErrors.push("Zip code is required")
    if(!imageUrl) {
      validationErrors.push("Please provide an image")
    } else if (!isURL(imageUrl)) {
      validationErrors.push("Please provide a valid link for the image")
    }
    if(!lat) validationErrors.push("latitude of business is required")
    if(!lng) validationErrors.push("longitude of business is required")



    setErrors(validationErrors)
  },[title,address,city,zipCode,imageUrl, lat, lng])

  const handleSubmit = async(e) => {
    e.preventDefault();

    const newBusiness = {
      title, description, address, city, zipCode, imageUrl, ownerId, lat, lng
    }
    // console.log("newBusiness in component", newBusiness)

    let createdBusiness = await dispatch(createOneBusiness(newBusiness, ))
    // console.log("Dispatch the return value of the thunk creator -returned from dispatch", createdBusiness)

    // console.log("createdBusiness component", createdBusiness)
    // console.log("createdBusiness component id", createdBusiness.id)

    if (createdBusiness) {
      history.push(`/business/${createdBusiness.id}`)
    }
  }

  return (
    <>
    <PicBanner />
    <div className="form-style">
    <form onSubmit={handleSubmit}>
      <label>
        Name
          <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          >
          </input>
      </label>

      <label>
        Description
          <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          >
          </input>
      </label>
      <label>
        Address
          <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          >
          </input>
      </label>
      <label>
        City
          <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          >
          </input>
      </label>
      <label>
        Zip Code
          <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          >
          </input>
      </label>
      <label>
        Image Url
        <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        >
        </input>
      </label>

      <label>
        Latitude of Restaurant Location
        <input
        type="text"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
        >
        </input>
      </label>

      <label>
        Longitude of Restaurant Location
        <input
        type="text"
        value={lng}
        onChange={(e) => setLng(e.target.value)}
        >
        </input>
      </label>
      <ul className="errors">
        {errors.map((error) => <li key={error}>{error}</li>)}
      </ul>
      <button
        type="submit"
        disabled={errors.length>0}
      >
        Submit
      </button>
    </form>
    </div>
    </>
  )

}


export default CreateBusinessForm
