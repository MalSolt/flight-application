import { SET_FLIGHTS, GET_FLIGHTS, SHOW_LOADER, HIDE_LOADER, TOGGLE_SELECTED } from './types'

const initialState = {
  flights: [],
  isLoading: false,
}

export const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLIGHTS:
      return {
        ...state,
        flights: action.payload,
      }
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      }
    case HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
      }
    case TOGGLE_SELECTED:
      return {
        ...state,
        flights: state.flights.map(e => (e.id === action.payload.id ? { ...e, selected: !e.selected } : e)),
      }
    default:
      return state
  }
}

export const setFlights = data => {
  const flights = data.Quotes.map(e => {
    return {
      id: e.QuoteId,
      selected: false,
      price: e.MinPrice,
      dateTime: e.QuoteDateTime.substr(11, 5),
      date: e.OutboundLeg.DepartureDate.substr(0, 10),
      carrier: data.Carriers.filter(carrier => carrier.CarrierId === e.OutboundLeg.CarrierIds[0])[0].Name,
    }
  })
  return { type: SET_FLIGHTS, payload: flights }
}

export const getFlights = () => ({ type: GET_FLIGHTS })

export const showLoader = () => ({ type: SHOW_LOADER })

export const hideLoader = () => ({ type: HIDE_LOADER })

export const toggleSelected = id => ({ type: TOGGLE_SELECTED, payload: { id } })
