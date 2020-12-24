import React from 'react'
import s from './Flight.module.scss'
import arrow from '../../../img/flight/arrow.svg'
import dash from '../../../img/flight/dash.svg'

export const Description = ({ dateTime, date, carrier }) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const dateFormatting = date => {
    const monthDay = date.substr(8, 2)
    const month = months[date.substr(5, 2) - 1]
    const year = date.substr(0, 4)
    return `${monthDay} ${month}, ${year}`
  }
  return (
    <div className={s.description}>
      <div className={s.location}>
        Moscow (SVO) <img src={arrow} alt='-' /> New York City (JFK)
      </div>
      <div className={s.date}>
        {dateFormatting(date)} <img src={dash} alt='-' /> {dateTime}
      </div>
      <div className={s.carrier}>{carrier}</div>
    </div>
  )
}
