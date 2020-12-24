import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Flights, Loader, Logout, Slider } from '../../components'
import arrow from '../../img/arrow.svg'
import { getFlights } from '../../redux/flightsReducer/flightsRegucer'
import s from './Main.module.scss'

export const Main = () => {
  const dispatch = useDispatch()
  const [filterDate, setFilterDate] = useState(null)
  const isLoading = useSelector(state => state.flights.isLoading)
  const isAuthorized = useSelector(state => state.auth.isAuthorized)

  useEffect(() => {
    dispatch(getFlights())
  }, [dispatch])

  if (!isAuthorized) return <Redirect to='/auth' />
  return (
    <div className={s.main}>
      <Logout />
      <div className={s.container}>
        <header className={s.header}>
          <div>
            Вылеты <img src={arrow} alt='arrow' /> SVO -JFK
          </div>
          <div>
            <input type='date' value={filterDate} onChange={e => setFilterDate(e.target.value)} />
          </div>
        </header>
        <Slider />
        {isLoading ? <Loader /> : <Flights filterDate={filterDate} />}
      </div>
    </div>
  )
}
