import { csrfFetch } from "./csrf"

export const LOAD_REVIEWS = "items/LOAD_REVIEWS";


// action
const load = (reviews, businessId) => ({
  type: LOAD_REVIEWS,
  reviews,
  businessId,
});


// thunk for getting all reviews
export const getReviews = (businessId) => async(dispatch) => {

  const response = await csrfFetch(`/api/business/${businessId}/reviews`)
  if(response.ok) {
    const reviews = await response.json();
    console.log("reviews in thunk, works!", reviews)
    console.log("thunk businessId", businessId)
    dispatch(load(reviews, businessId))
  }
}

// thunk for creating a review
export const createOneReview = (formData) => async dispatch => {
  
}


// reducer
const initialState = {};
const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REVIEWS : {
      const newState = {...state};
      action.reviews.forEach((review) => {
        newState[review.id] = review
      })
      return newState
    }
    default:
      return state;
  }
}

export default reviewReducer
