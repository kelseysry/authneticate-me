import { csrfFetch } from "./csrf"

const LOAD_REVIEWS = "review/LOAD_REVIEWS";
const ADD_ONE = "review/ADD_ONE"

// action
const load = (reviews, businessId) => ({
  type: LOAD_REVIEWS,
  reviews,
  businessId,

});

// action create one review
const addOneReview = (newReview) => ({
  type: ADD_ONE,
  newReview
})


// thunk for getting all reviews
export const getReviews = (businessId) => async(dispatch) => {

  const response = await csrfFetch(`/api/business/${businessId}/reviews`)
  if(response.ok) {
    const reviews = await response.json();
    console.log("reviews in thunk, works!", reviews)
    console.log("thunk businessId, worjs", businessId)
    dispatch(load(reviews, businessId))
  }
}

// thunk for creating a review
export const createOneReview = (formData) => async dispatch => {
  let businessId = formData.businessId
  const response = await csrfFetch(`/api/business/${businessId}/reviews`, {
    method: 'POST',
    body: JSON.stringify(formData)
  });

  const newReview = await response.json();
  dispatch(addOneReview(newReview))
  return newReview
}

// reducer
const initialState = {};
const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REVIEWS: {
      const newState = {...state};
      action.reviews.forEach((review) => {
        newState[review.id] = review
      })
      console.log("newState LOAD_REVIEWS", newState)
      return newState
    }
    case ADD_ONE : {
      // console.log("add_one case", newReview)
      if(!state[action.newReview.id]) {
        const newState = {
          ...state,
          [action.newReview.id]: action.newReview
        }
        return newState
      }
      return state
    }
    default:
      return state;
  }
}

export default reviewReducer
