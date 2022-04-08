const  { combineReducers  } = require("redux")
const { userReducer, addCart} = require("../src/components/login/reducers")

const reducers = combineReducers({
    userReducer, addCart
})


module.exports = reducers;