import React from 'react'
import { Route } from 'react-router-dom'
import { Auth, Main } from './pages'

export function App() {
  return (
    <>
      <Route exact path={['/', '/auth']}>
        <Auth />
      </Route>
      <Route exact path='/main'>
        <Main />
      </Route>
    </>
  )
}
