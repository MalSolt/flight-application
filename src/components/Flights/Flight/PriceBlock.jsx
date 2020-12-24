import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleSelected } from '../../../redux/flightsReducer/flightsRegucer'
import s from './Flight.module.scss'
import { Heart } from './Heart'

export const PriceBlock = ({ id, price, selected }) => {
  const dispatch = useDispatch()

  const priceFormating = price => {
    return ('' + price).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
  }

  return (
    <div className={s.priceBlock}>
      <div onClick={() => dispatch(toggleSelected(id))} className={s.heart}>
        <Heart selected={selected} />
      </div>
      <div className={s.price}>
        <span>Price: </span>
        {priceFormating(price)} &#8381;
      </div>
    </div>
  )
}
