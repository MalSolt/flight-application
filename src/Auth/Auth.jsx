import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import background from '../img/backAnimation.png'
import headerBackgrounf from '../img/header-background.png'
import logo from '../img/logo.png'
import { Loader } from '../Loader/Loader'
import { getIsAuthorized, getisLoading } from '../redux/authReducer'
import { AuthForm } from './AuthForm'

const Container = styled.div`
  width: 437px;
  margin: 100px auto 0;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  height: ${({ isAuthorized, isLoading }) => (isAuthorized || isLoading) && 310}px;
  background-image: url(${({ isAuthorized, isLoading }) => (isAuthorized || isLoading) && background});
`

const Header = styled.div`
  text-align: center;
  height: 177px;
  background-image: url(${headerBackgrounf});
  padding: 50px 0 40px;
`

const Heading = styled.div`
  text-align: center;
  padding-top: 16px;
  font-size: 16px;
  color: #ffffff;
`
const AuthContainer = styled.div`
  background-color: #fff;
  padding: 14px 17px 25px;
`

const Success = styled.div`
  font-size: 36px;
  color: #fff;
`

export const Auth = () => {
  const isAuthorized = useSelector(getIsAuthorized)
  const isLoading = useSelector(getisLoading)
  return (
    <Container isAuthorized={isAuthorized} isLoading={isLoading}>
      <Header>
        <img src={logo} alt='' />
        <Heading>Корпоративная информационная система</Heading>
        {(isLoading || isAuthorized) && (
          <Heading>
            Добрый день, <strong>Владислав!</strong>
          </Heading>
        )}
        <div style={{ marginTop: '25px' }}>
          {isLoading && <Loader />}
          {isAuthorized && <Success>Готово!</Success>}
        </div>
      </Header>
      {!isAuthorized && !isLoading && (
        <AuthContainer>
          <div style={{ width: '347px' }}>
            <AuthForm />
          </div>
        </AuthContainer>
      )}
    </Container>
  )
}
