import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import isURL from 'validator/es/lib/isURL';
import { createOneBusiness } from '../../store/business';

import { useDispatch, useSelector } from "react-redux";


const CreateBusinessForm = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  // const [ownerId, setOwnerId] = useState('')
  const [errors, setErrors] = useState([])
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  console.log("this is sessionUser", sessionUser)
  console.log("this is sessionUserId", sessionUser.id)
  const ownerId = sessionUser.id


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



    setErrors(validationErrors)
  },[title,address,city,zipCode,imageUrl])

  const handleSubmit = async(e) => {
    e.preventDefault();

    const newBusiness = {
      title, description, address, city, zipCode, imageUrl, ownerId
    }
    // console.log("newBusiness in component", newBusiness)

    let createdBusiness = await dispatch(createOneBusiness(newBusiness, ))
    // console.log("Dispatch the return value of the thunk creator -returned from dispatch", createdBusiness)

    if (createdBusiness) {
      // history.push(`/business/${createdBusiness.id}`)
      history.push('/')
    }
  }

  return (

    <form onSubmit={handleSubmit}>
      <ul className="errors">
        {errors.map((error) => <li key={error}>{error}</li>)}
      </ul>
      <label>
        Name
          <input
          type="text"
          placeholder="Name of Business"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          >
          </input>
      </label>

      <label>
        Description
          <input
          type="text"
          placeholder="Tell us what customers love about your restaurant!"
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
      {/* <label>
        Owner Id
        <input
        type="number"
        value={ownerId}
        onChange={(e) => setOwnerId(e.target.value)}
        >
        </input>
      </label> */}
      <button
        type="submit"
        disabled={errors.length>0}
      >
        Submit
      </button>
    </form>
  )

}


export default CreateBusinessForm
