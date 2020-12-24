import React from 'react'
import plane from '../../../img/flight/plane.svg'
import { Description } from './Description'
import s from './Flight.module.scss'
import { PriceBlock } from './PriceBlock'

export const Flight = ({ id, selected, price, dateTime, date, carrier }) => {
  return (
    <div className={s.flight}>
      <div className={s.img}>
        <img src={plane} alt='' />
      </div>
      <Description dateTime={dateTime} date={date} carrier={carrier} />
      <PriceBlock id={id} price={price} selected={selected} />
    </div>
  )
}
