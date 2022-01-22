import { useEffect, useState } from "react"
// import { useHistory } from 'react-router';
import isURL from 'validator/es/lib/isURL';
import { useDispatch} from 'react-redux';
import { createOneReview } from "../../store/review";
import { useSelector } from "react-redux";
import {useParams} from 'react-router-dom';
import './CreateReview.css'

const ReviewForm = ({reviews, hideForm, hideButton}) => {

  const { businessId } = useParams();
  const [rating, setRating] = useState('');
  const [answer, setAnswer] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  // const [errors, setErrors] = useState([])
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser.id

  const [validationErrors, setValidationErrors] = useState([]);


  // useEffect(() => {
  //   const validationErrors = [];
  //   if(!rating) validationErrors.push("Rating is required")
  //   if(rating > 5 || rating < 1) validationErrors.push("Rating must be between 1-5")
  //   if(!answer) validationErrors.push("Please write a review!")
  //   if(answer.length < 10) validationErrors.push("Review must be at least 10 characters!")
  //   if(!imageUrl) {
  //     validationErrors.push("Please provide an image")
  //   } else if (!isURL(imageUrl)) {
  //     validationErrors.push("Please provide a valid link for the image")
  //   }

  //   setErrors(validationErrors)

  // },[rating,answer,imageUrl,userId,businessId])

  const validate = () => {

    const validationErrors = [];
    if(!rating) {validationErrors.push("Rating is required")}
    else if(rating > 5 || rating < 1) {validationErrors.push("Rating must be between 1-5")}
    if(!answer) {validationErrors.push("Please write a review!")}
    else if(answer.length < 10) validationErrors.push("Review must be at least 10 characters!")
    if(!imageUrl) {
      validationErrors.push("Please provide an image")
    } else if (!isURL(imageUrl)) {
      validationErrors.push("Please provide a valid link for the image")
    }

    return validationErrors;

  }




  const handleSubmit = async(e) => {
    e.preventDefault();

    const frontErrors = validate();
    if (frontErrors.length > 0) setValidationErrors(frontErrors);

    if(frontErrors.length === 0) {

    const newReview = {
      rating,answer,imageUrl,userId,businessId
    }
    // console.log("newReview in CreateView Component", newReview)

    let createdReview = await dispatch(createOneReview(newReview))
    // console.log("this is createdReview in CreateView Component", createdReview)

    // if(createdReview) {
    //   history.push('/')
    // }
    if (createdReview) {
      hideForm();

    }
  }



  }

  const handleCancelReviewFormClick = (e) => {
    e.preventDefault();
    hideForm();
    hideButton();
  }

  return (
<>
    <form className="form-create-review-form" onSubmit={handleSubmit}>

      <label>
          <input
            type="number"
            placeholder="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
          </input>
      </label>
      <label>
          <input
            placeholder="review"
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          >
          </input>
      </label>
      <label>
        <input
        type="text"
        placeholder="image url"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        >
        </input>
      </label>
      {/* <ul className="error">
      {errors.map((error) => <li key={error}>{error}</li>)}
      </ul> */}
            {validationErrors.length?
        <>
          <ul className="createBusinessErrors">
              {validationErrors.map((error) => <li key={error}>{error}</li>)}
          </ul>
        </>
        : null
      }
      <div className="reviewButtons">
        <button
        className="createReviewButton"
        type="submit"
        // disabled={validationErrors.length>0}
        >Submit Review</button>
        <button
        className="createReviewButton"
        type="button" onClick={handleCancelReviewFormClick}>Cancel</button>
      </div>
    </form>
    </>
  )

}


export default ReviewForm
