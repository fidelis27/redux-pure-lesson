const { CHANGE_USER, LOGOUT, ADD_CART} = require('../constants.js')

const initialState = {
    user: '',
    isLogged: false,
  }
  
  // Reducers
  function userReducer(prevState = initialState, action) {
    switch (action.type) {
      case CHANGE_USER:
        return {
          ...prevState,
          user: action.payload,
          isLogged: true,
        }
      case LOGOUT:
        return {
          ...prevState,
          user: '',
          isLogged: false
        }
      default:
        return prevState
    }
  }

const addCart = (state = {}, { type, payload }) => {
    switch (type) {
      case ADD_CART:      
      default:
        return state;
    }
  };

  module.exports =   { userReducer , addCart } 