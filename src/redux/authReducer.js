const IS_AUTH = 'IS_AUTH'

let initialState = {
  isAuthorized: JSON.parse(localStorage.getItem('isAuthorized')),
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTH:
      localStorage.isAuthorized = action.payload.isAuthorized
      return {
        ...state,
        isAuthorized: JSON.parse(localStorage.isAuthorized),
      }
    default:
      return state
  }
}

export const isAuth = isAuthorized => ({
  type: IS_AUTH,
  payload: { isAuthorized },
})

export default authReducer
