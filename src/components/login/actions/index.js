const { CHANGE_USER, LOGOUT } = require('../constants.js')




// Actions -> aciona mudança de estado no store
function changeUser(user) {
    return {
      type: CHANGE_USER,
      info: "Change the current user",
      payload: user
    }
  }
  
function logout() {
    return {
      type: LOGOUT,
      info: "Logout the current user",
    }
  }

  const addCart = (action, payload) => {
    return {
      type: ADD_CART,
      payload: payload
    }
  }
  module.exports ={ changeUser , logout, addCart};