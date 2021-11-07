// currently in the business slice of state
import { csrfFetch } from "./csrf"

const LOAD_BUSINESS = 'business/LOAD_BUSINESS';
const LOAD_BUSINESSES = 'business/LOAD_BUSINESSES' //domain/action

// action for one business
const load = (business, businessId) => ({
  type: LOAD_BUSINESS,
  business,
  businessId
})

// action for all business
// we passed in businesses in the thunk when we did dispatch(loadBusinesses(businesses))
// so need to pass businesses here too
const loadBusinesses = (businesses) => ({
  type: LOAD_BUSINESSES,
  businesses,
})

// thunk for getOneBusiness
export const getOneBusiness = (businessId) => async (dispatch) => {
  const response = await csrfFetch(`/api/business/${businessId}`);

  if(response.ok) {
    const business = await response.json();
    dispatch(load(business))
    console.log(business)
  }
}

// thunk for getAllBusinesses
export const getAllBusinesses = () => async (dispatch) => {
  const res = await fetch('/api/business');
  const businesses = await res.json();
  dispatch(loadBusinesses(businesses))
}

// reducer
const initialState = {};
const businessReducer = (state = initialState, action) => {
let newState
switch (action.type) {
  case LOAD_BUSINESSES:
    const newState = {...state}; // don't have to ...state, if this load on first render/first time user opens the page
    action.businesses.forEach((business) => {
      // normalizing
      newState[business.id] = business // make key value pair with id as key and value as business object
    })
    console.log("this is the new State", newState)
    return newState // must return newState or else will skip to default


    // newState = Object.assign({}, state);
    // newState.business = action.business
    // return newState;
    // const oneBusiness = {};
    // action.business.forEach((business) => {
    //   oneBusiness[business.id] = business
    // });
    // return {
    //   ...oneBusiness,
    //   ...state,
    // }

  default:
    return state;
  }
};

export default businessReducer
