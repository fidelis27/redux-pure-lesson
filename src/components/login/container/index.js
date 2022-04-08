const { changeUser, logout } = require('../actions');
const store = require('../../../../store')


console.log("Initial state", store.getState())
store.dispatch(changeUser("THIAGO"))
console.log("New state Container", store.getState())
store.dispatch(logout())
console.log("New state Container", store.getState())
