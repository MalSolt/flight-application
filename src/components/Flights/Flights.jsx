import React from 'react'
import { useSelector } from 'react-redux'
import { getFlights } from '../../redux/selectors'
import { Flight } from './Flight/Flight'
import s from './Flights.module.scss'

export const Flights = () => {
  const flights = useSelector(getFlights)
  const selectedFlights = flights.filter(e => e.selected)

  return (
    <div className={s.flightsBlock}>
      <div className={s.selectedFlights}>
        Добавлено в Избранное: <span>{selectedFlights.length}</span> рейсов
      </div>
      <div className={s.flights}>
        {flights.map(e => (
          <Flight key={e.id} {...e} />
        ))}
      </div>
    </div>
  )
}
