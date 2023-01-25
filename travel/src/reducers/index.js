import { combineReducers } from 'redux';

const initial = {
  data: [],
  viewData: {},
  offerData: [],
  viewOffer: {},
  userLoggedIn: JSON.parse(sessionStorage.getItem('user')),
};

const postReducer = (state = initial, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return { ...state, data: action.payload };
    case 'VIEW_PACKAGE':
      return { ...state, viewData: action.payload };
    case 'GET_OFFER':
      return { ...state, offerData: action.payload };
    case 'VIEW_OFFER':
      return { ...state, viewOffer: action.payload };
    case 'LOGIN':
      return { ...state, userLoggedIn: action.payload };
    default:
      return state;
  }
};

export default combineReducers({ postReducer });
