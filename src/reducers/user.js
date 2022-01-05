import { LOGIN_SUCCESS } from '../actions'

let newState = {
  user: 0,
  isLogged:false
}

export default function (state, action) {
  console.log('state', state, action)
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...newState,
        user: action.user,
        isLogged:true
      }
    default:
      return newState
  }
}