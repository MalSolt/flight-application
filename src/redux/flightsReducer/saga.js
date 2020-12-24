import { takeEvery, put, call } from 'redux-saga/effects'
import { requestFligths } from '../../api/api'
import { hideLoader, setFlights, showLoader } from './flightsRegucer'
import { GET_FLIGHTS } from './types'

export function* sagaWatcher() {
  yield takeEvery(GET_FLIGHTS, sagaWorker)
}

function* sagaWorker() {
  try {
    yield put(showLoader())
    const data = yield call(requestFligths)
    yield put(setFlights(data))
    yield put(hideLoader())
  } catch {
    alert('При получении списка рейсов, что-то пошло не так!!!')
  }
}
