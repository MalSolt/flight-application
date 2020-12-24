import React from 'react'
import { useSelector } from 'react-redux'
import { Flight } from './Flight/Flight'
import s from './Flights.module.scss'

export const Flights = ({ filterDate }) => {
  const flights = useSelector(state => state.flights.flights)
  const selectedFlights = flights.filter(e => e.selected)

  const filteringFlightsByDate = flights => {
    return filterDate
      ? flights.filter(e => e.date === filterDate).map(e => <Flight key={e.id} {...e} />)
      : flights.map(e => <Flight key={e.id} {...e} />)
  }

  const filteredFlightsByDate = filteringFlightsByDate(flights)

  return (
    <div className={s.flightsBlock}>
      <div className={s.selectedFlights}>
        Добавлено в Избранное: <span>{selectedFlights.length}</span> рейсов
      </div>
      <div className={s.flights}>
        {filteredFlightsByDate.length ? filteredFlightsByDate : <div className={s.notFlights}>В этот день нет рейсов...</div>}
      </div>
    </div>
  )
}
