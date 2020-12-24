import React from 'react'
import s from './Logout.module.scss'
import logout from '../../img/logout.svg'
import { isAuth } from '../../redux/authReducer'
import { useDispatch } from 'react-redux'

export const Logout = () => {
  const dispatch = useDispatch()
  return (
    <div className={s.logout} onClick={() => dispatch(isAuth(false))}>
      <span>Выйти</span>
      <img src={logout} alt='' />
    </div>
  )
}
