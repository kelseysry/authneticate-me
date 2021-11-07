import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

const CreateBusinessForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [imageUrl, setImageUrl] = useState('');


  const handleSubmit = async(e) => {
    e.preventDefault();


  }

  return (

    <form onSubmit={handleSubmit}>
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
          onChange={(e) => setAddress(e.target.value)}
          >
          </input>
      </label>
      <label>
        Zip Code
          <input
          type="text"
          value={zipCode}
          onChange={(e) => setAddress(e.target.value)}
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




    </form>
  )

}


export default CreateBusinessForm
