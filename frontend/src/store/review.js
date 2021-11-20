import { csrfFetch } from "./csrf"

const LOAD_REVIEWS = "review/LOAD_REVIEWS";
const ADD_ONE = "review/ADD_ONE"
const CLEAR = "review/CLEAR"
const EDIT_ONE_REVIEW = "review/EDIT_ONE_REVIEW"
const REMOVE_REVIEW = "review/REMOVE_REVIEW"

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

// action to clear reviews so not see other reviews on a business
export const clearReviews = () => ({
  type: CLEAR,

})

// action creator to edit one review
export const editReviewAction = (review, reviewId) => ({
  type: EDIT_ONE_REVIEW,
  review,
  reviewId
})

// action creator to delete on review
const removeOneReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId
})


// thunk for getting all reviews
export const getReviews = (businessId) => async(dispatch) => {

  const response = await csrfFetch(`/api/business/${businessId}/reviews`)
  if(response.ok) {
    const reviews = await response.json();
    // console.log("reviews in thunk, works!", reviews)
    // console.log("thunk businessId, worjs", businessId)
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

//thunk for editing a review
export const editOneReview = (editReview, reviewId, businessId) => async dispatch => {
  const response = await csrfFetch(`/api/business/${businessId}/reviews/${reviewId}`, {
    method: 'PUT',
    body: JSON.stringify(editReview)
  });
  // console.log('response in the thunk editOneReview', response)

  const review = await response.json();
  dispatch(editReviewAction(review, reviewId))
  return review
}

// thunk to delete a review
export const deleteReview = (businessId, reviewId) => async dispatch => {
  const response = await csrfFetch(`/api/business/${businessId}/reviews/${reviewId}`, {
    method: 'DELETE'
  });
  console.log("delete review thunk", response)
  console.log("reviewId in thunk", reviewId)
  if(response.ok) {
    dispatch(removeOneReview(reviewId))
  }
};

// reducer
const initialState = {};
const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REVIEWS: {
      const newState = {...state};
      action.reviews.forEach((review) => {
        newState[review.id] = review
      })
      // console.log("newState LOAD_REVIEWS", newState)
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
    case EDIT_ONE_REVIEW: {
      if(!state[action.review]) {
        const newState = {
          ...state, [action.review.id]: action.review
        };
        // console.log("this is newState", newState)

        return newState
      }
      return state
    }
    case REMOVE_REVIEW : {
      const newState = {...state};
      delete newState[action.reviewId];
      return newState
    }
    case CLEAR : {
      return {}
    }
    default:
      return state;
  }
}

export default reviewReducer
