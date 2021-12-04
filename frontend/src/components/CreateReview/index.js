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
  // const [hideReviewButton, setHideReviewButton] = useState('')

  // const [userId, setUserId] = useState('');
  // const [businessId, setBusinessId] = useState('')
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch();
  // const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  // const business = useSelector((state) => state.business)
  const userId = sessionUser.id
  // const businessId = reviews[0].businessId

  // console.log("this is reviews", {reviews})
  // console.log("this is reviews", reviews[0].businessId)


  useEffect(() => {
    const validationErrors = [];
    if(!rating) validationErrors.push("Rating is required")
    if(rating > 5 || rating < 1) validationErrors.push("Rating must be between 1-5")
    if(!answer) validationErrors.push("Please write a review!")
    if(answer.length < 10) validationErrors.push("Review must be at least 10 characters!")
    if(!imageUrl) {
      validationErrors.push("Please provide an image")
    } else if (!isURL(imageUrl)) {
      validationErrors.push("Please provide a valid link for the image")
    }

    // need to get rid of this later
    // if(!userId) validationErrors.push("userId required");
    // if(!businessId) validationErrors.push("businessId required")


    setErrors(validationErrors)

  },[rating,answer,imageUrl,userId,businessId])


  //  // hide create a review button
  //  useEffect(() => {
  //   setHideReviewButton(false)
  // },[dispatch, reviews.length, ])


  const handleSubmit = async(e) => {
    e.preventDefault();

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
      <ul className="error">
      {errors.map((error) => <li key={error}>{error}</li>)}
      </ul>
      <button className="pad-add-review-button" type="submit" disabled={errors.length>0} >Submit Review</button>
      <button className="pad-add-review-desktop" type="button" onClick={handleCancelReviewFormClick}>Cancel</button>

    </form>
    </>
  )

}


export default ReviewForm
