import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Flights, Loader, Logout, Slider } from '../../components'
import arrow from '../../img/arrow.svg'
import logo from '../../img/logo.png'
import { getFlights } from '../../redux/flightsReducer/flightsRegucer'
import { getIsAuthorized, getIsLoading } from '../../redux/selectors'
import s from './Main.module.scss'

export const Main = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(getIsLoading)
  const isAuthorized = useSelector(getIsAuthorized)

  useEffect(() => {
    dispatch(getFlights())
  }, [dispatch])

  if (!isAuthorized) return <Redirect to='/auth' />
  return (
    <>
      <Logout />
      <div className={s.container}>
        <header className={s.header}>
          <div>
            Вылеты <img className={s.arrow} src={arrow} alt='arrow' /> SVO - JFK
          </div>
          {/* <div>Aviasels</div> */}
          <img className={s.logo} src={logo} alt='' />
        </header>
        <Slider />
        {isLoading ? <Loader /> : <Flights />}
      </div>
    </>
  )
}
