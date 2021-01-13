import React from 'react'
import styled from 'styled-components'
import warning from '../img/warning.png'
import { Field } from 'formik'

const Container = styled.div`
  margin-top: 50px;
  transition: 1s;
  width: 346px;
  transform: translateY(${({ state }) => (state === 'entering' || state === 'entered' ? -280 : 0)}px);
`

const Description = styled.div`
  font-size: 14px;
  margin-bottom: 15px;
`

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const Label = styled.label`
  color: #999;
  font-weight: normal;
  opacity: 0.75;
  order: 1;
  padding-left: 2px;
  pointer-events: none;
  text-shadow: none;
  text-transform: capitalize;
  transform-origin: left top;
  transform: scale(1) translate3d(10px, 35px, 0);
  transition: 200ms ease all;
`

const MyField = styled(Field)`
  background-color: #f2f2f2;
  font-size: 0px;
  padding-left: 8px;
  padding-top: 15px;
  height: 54px;
  border-radius: 6px;
  flex: 1 1 auto;
  order: 2;
`

const Warning = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
  margin-bottom: 40px;
`

const WarningTitle = styled.span`
  width: 304px;
  font-size: 13px;
  line-height: 15px;
  color: #949494;
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 146px;
  height: 48px;
  font-weight: 500;
  font-size: 13px;
  color: #949494;
  background: ${props => (props.fill ? '#ebebeb' : '#fff')};
  border-radius: 6px;
  &:hover {
    background: ${props => props.fill && 'linear-gradient(90.26deg, #00b5ad -75.74%, #5f3264 87.41%)'};
    color: ${props => (props.fill ? '#fff' : '#00b5ad')};
  }
  &:active {
    background: ${props => props.fill && 'radial-gradient(5422.06% 1119.76% at 0% 288.54%, #3c8291 0%, #00b5ad 100%)'};
    color: ${props => (props.fill ? '#fff' : '#00b5ad')};
  }
`

export const Restore = ({ state, setAnimate, animate }) => {
  return (
    <Container state={state}>
      <Description>Востанволение пароля</Description>
      <FieldContainer>
        <MyField />
        <Label>Логин или e-mail*</Label>
      </FieldContainer>
      <Warning>
        <img src={warning} alt='' />
        <WarningTitle>Пароль будет отправлено на электронную почту, к которой привязана учетная запись.</WarningTitle>
      </Warning>
      <Buttons>
        <Button onClick={() => setAnimate(!animate)} type='button' fill={false}>
          Назад
        </Button>
        <Button type='button' fill={true}>
          Восстановить
        </Button>
      </Buttons>
    </Container>
  )
}
