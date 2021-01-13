const LOGIN = 'LOGIN'
const LOADING = 'LOADING'

let initialState = {
  isAuthorized: false,
  isLoading: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthorized: true,
      }
    case LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      }
    default:
      return state
  }
}

export const login = () => {
  return dispatch => {
    dispatch({ type: LOADING })
    setTimeout(() => {
      dispatch({ type: LOGIN })
      dispatch({ type: LOADING })
    }, 3000)
  }
}

export const getIsAuthorized = state => state.auth.isAuthorized
export const getisLoading = state => state.auth.isLoading

export default authReducer
