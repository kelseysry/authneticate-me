import { useEffect, useState } from 'react';
// import { useHistory } from 'react-router';
import isURL from 'validator/es/lib/isURL';
// import { createOneBusiness } from '../../store/business';

import { useDispatch, useSelector } from "react-redux";
// import { useParams } from 'react-router-dom';

import { editOneBusiness } from '../../store/business';

import './EditBusinessForm.css';


// import { editOneBusiness } from '../store/business';

const EditBusinessForm = ({business, hideForm}) => {


  const [title, setTitle] = useState(business.title);
  const [description, setDescription] = useState(business.description);
  const [address, setAddress] = useState(business.address);
  const [city, setCity] = useState(business.city);
  const [zipCode, setZipCode] = useState(business.zipCode);
  const [imageUrl, setImageUrl] = useState(business.imageUrl);
  // const [ownerId, setOwnerId] = useState(business.ownerId)
  const [lat, setLat] = useState(business.lat);
  const [lng, setLng] = useState(business.lng);
  const [errors, setErrors] = useState([])

  // const history = useHistory();
  const dispatch = useDispatch();

  // const business = useSelector((state) => state.business[businessId])
  const sessionUser = useSelector((state) => state.session.user);

  const ownerId = sessionUser.id


  useEffect(() => {
    const validationErrors = []
    if(!title) validationErrors.push("Name is required")
    if(title.length<4) validationErrors.push("Name must be more than 4 characters long")
    if(title.length >100) validationErrors.push("Name must be less than 100 characters")
    if(!description) validationErrors.push("Please fill in description")
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

  },[title,address,city,zipCode,imageUrl, description,lat,lng])

  const handleSubmit = async(e) => {
    e.preventDefault();

    const userInputUpdateBusiness = {
      title, description, address, city, zipCode, imageUrl, ownerId, lat,lng
    }

    // console.log("this is userInput", userInputUpdateBusiness)

    // editOneBusiness is the thunk, we're passing the updateBusiness info that the user typed
    // and the specific business.id that we can get from the useSelector in the SingleBusinessPage component
    // note we passed in business as a prop into the EditBusinessForm component
    let updated = await dispatch(editOneBusiness(userInputUpdateBusiness, business.id))
    // console.log("editBusinessForm after dispatch thunk", updated)

    if (updated) {
      hideForm();
    }

  }

  const handleCancelFormEditClick = (e) => {
    e.preventDefault();
    hideForm();
  };

  return (
  <section className="edit-form-container">
    <form onSubmit={handleSubmit}>
      <label>
        Name
          <input
          type="text"
          placeholder="name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          >
          </input>
      </label>
      <label>
        Description
          <input
          type="text"
          // placeholder="Tell us what customers love about your restaurant!"
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
      <div className="edit-business-buttons-flex">
        <button type="submit" disabled={errors.length>0}>Update Business</button>
        <button type="button" onClick={handleCancelFormEditClick}>Cancel</button>
      </div>
      </form>
    </section>
  )

}


export default EditBusinessForm
