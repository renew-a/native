export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const login = (useCredentials) => {
  if (useCredentials) {
    return {
      type: LOGIN_SUCCESS,
      user: useCredentials
    }
  } else {
    return {
      type: LOGIN_ERROR
    }
  }
}