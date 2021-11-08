import { useEffect, useState } from "react"
// import { useHistory } from 'react-router';
import isURL from 'validator/es/lib/isURL';
import { useDispatch} from 'react-redux';
import { createOneReview } from "../../store/review";


const ReviewForm = ({reviews, hideForm}) => {

  const [rating, setRating] = useState('');
  const [answer, setAnswer] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [userId, setUserId] = useState('');
  const [businessId, setBusinessId] = useState('')
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch();
  // const history = useHistory();


  useEffect(() => {
    const validationErrors = [];
    if(!rating) validationErrors.push("Rating is required")
    if(!answer) validationErrors.push("Please write a review!")
    if(answer.length < 10) validationErrors.push("Please write a review with at least 10 or more characters!")
    if(!imageUrl) {
      validationErrors.push("Please provide an image")
    } else if (!isURL(imageUrl)) {
      validationErrors.push("Please provide a valid link for the image")
    }

    // need to get rid of this later
    if(!userId) validationErrors.push("userId required");
    if(!businessId) validationErrors.push("businessId required")


    setErrors(validationErrors)

  },[rating,answer,imageUrl,userId,businessId])


  const handleSubmit = async(e) => {
    e.preventDefault();

    const newReview = {
      rating,answer,imageUrl,userId,businessId
    }

    let createdReview = await dispatch(createOneReview(newReview))

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
  }

  return (
    <form onSubmit={handleSubmit}>
      <ul className="error">
      {errors.map((error) => <li key={error}>{error}</li>)}
      </ul>
      <label>
        Rating
          <input
            type="number"
            placeholder="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
          </input>
      </label>
      <button type="submit" disabled={errors.length>0}>Submit Reviw</button>
    </form>
  )

}


export default ReviewForm
