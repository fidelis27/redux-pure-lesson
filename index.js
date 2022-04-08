//Armazenamento do estado de uma aplicação em JS
//Arquitetura FLUX lado do cliente


// Import redux e create store
const redux = require("redux")
const createStore = redux.createStore

//  Actions TYPE
const CHANGE_USER = 'CHANGE_USER';
const LOGOUT = 'LOGOUT';

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

// Store - > container que armazena todos os estados da aplicação, ele é imutável ele só evolui
const store = createStore(userReducer)

console.log("Initial state", store.getState())
store.dispatch(changeUser("THIAGO"))
console.log("New state", store.getState())
store.dispatch(logout())
console.log("New state", store.getState())
