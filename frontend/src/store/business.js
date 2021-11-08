// currently in the business slice of state
import { csrfFetch } from "./csrf"

const LOAD_BUSINESS = 'business/LOAD_BUSINESS';  //domain/action
const LOAD_BUSINESSES = 'business/LOAD_BUSINESSES';
const ADD_ONE = 'business/ADD_ONE';
const REMOVE_BUSINESS = 'business/REMOVE_BUSINESS';
const EDIT_ONE = 'business/EDIT_ONE'

// action for one business
const load = (business) => ({
  type: LOAD_BUSINESS,
  business,
})

// action for all business
// we passed in businesses in the thunk when we did dispatch(loadBusinesses(businesses))
// so need to pass businesses here too
const loadBusinesses = (businesses) => ({
  type: LOAD_BUSINESSES,
  businesses,
})

// action create one business
const addOneBusiness = (newBusiness) => ({
  type:ADD_ONE,
  newBusiness,
})

// action creator edit one business
const edit = (updateBusiness) => ({
  type: EDIT_ONE,
  updateBusiness,

})

// action creator delete one business
const removeOneBusiness = (businessId) => ({
  type: REMOVE_BUSINESS,
  businessId
})



// thunk for getOneBusiness
export const getOneBusiness = (businessId) => async (dispatch) => {
  const response = await csrfFetch(`/api/business/${businessId}`);

  if(response.ok) {
    const business = await response.json();
    dispatch(load(business))
    // console.log("this is one", business)
  }
}

// thunk for getAllBusinesses
export const getAllBusinesses = () => async (dispatch) => {
  const res = await fetch('/api/business');
  const businesses = await res.json();
  dispatch(loadBusinesses(businesses))
}

// thunk for creating one business
export const createOneBusiness = (formData) => async dispatch  => {
  const response = await csrfFetch('/api/business', {
  // const response = await fetch('/api/business', {
    method: 'POST',
    // headers: { 'Content-Type': 'application/json'}, // remove
    body: JSON.stringify(formData)
  });

  // console.log("this is response in thunk, this works",response)

  // if(response.ok) {
    const newBusiness = await response.json();
    // console.log("newBusiness in thunk", newBusiness)

    dispatch(addOneBusiness(newBusiness))
    return newBusiness
  //}
}

// thunk for editing one business
export const editOneBusiness = (updateBusiness, businessId) => async dispatch => {
  const response = await csrfFetch(`/api/business/${businessId}`, {
    method: 'PUT',
    body: JSON.stringify(updateBusiness)
  });
  console.log('response in the thunk editOneBusiness', response)

  // if(response.ok) {
    const business = await response.json();
    dispatch(edit(business, businessId))
    return business
 // }
}

// thunk to delete one business
export const deleteBusiness = businessId => async dispatch => {
  const response = await csrfFetch(`/api/business/${businessId}`, {
    method: 'DELETE'
  });
  if (response.ok) {
    dispatch(removeOneBusiness(businessId))
  }
};

// reducer
const initialState = {};
const businessReducer = (state = initialState, action) => {
// let newState
switch (action.type) {
  case LOAD_BUSINESSES: {
    const newState = {...state}; // don't have to ...state, if this load on first render/first time user opens the page
    action.businesses.forEach((business) => {
      // normalizing
      newState[business.id] = business // make key value pair with id as key and value as business object
    })
    // console.log("this is the new State", newState)
    return newState // must return newState or else will skip to default
  }
  case LOAD_BUSINESS: {
    const newState = {...state};
    newState[action.business.id] = action.business
    // console.log("this is newState in Load", newState)
    return newState
  }
  case ADD_ONE: {
    if(!state[action.newBusiness.id]) {
      const newState = {
        ...state,
        [action.newBusiness.id]: action.newBusiness
      };
      // console.log("this is newState", newState)
      return newState
    }
  }
  case EDIT_ONE: {
  console.log("action.updateBusiness console.log", action.updateBusiness.business.id)


    if(!state[action.updateBusiness]) {
      const newState = {
        ...state, [action.updateBusiness.business.id]: action.updateBusiness.business
      };
      console.log("this is newState", newState)
      return newState
    }
  }
  // case EDIT_ONE: {
  //   console.log("action.updateBusiness console.log", action.updateBusiness)
  //   const newState = {...state, [action.updateBusiness.id]: action.updateBusiness.id};
  //   console.log("EDIT_ONEONE", newState)
  //   return newState
  // }
  case REMOVE_BUSINESS: {
    const newState = {...state};
    delete newState[action.businessId];
    return newState
  }
  default:
    return state;
  }
};

export default businessReducer
