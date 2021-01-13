import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Transition } from 'react-transition-group'
import styled from 'styled-components'
import * as Yup from 'yup'
import arrow from '../img/arrow.png'
import errorImg from '../img/error.png'
import successImg from '../img/success.png'
import { login } from '../redux/authReducer'
import { Restore } from './Restore'

const Wrapper = styled.div`
  height: 250px;
  overflow: hidden;
`

const Container = styled(Form)`
  transition: 1s;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  transform: translateY(${({ state }) => (state === 'entering' || state === 'entered' ? -300 : 0)}px);
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
  transform: scale(1) translate3d(10px, 32px, 0);
  transition: 200ms ease all;
`

const MyField = styled(Field)`
  background: ${props => props.success && '#f2f2f2'};
  background-image: url(${props => (props.success ? successImg : props.error && errorImg)});
  background-repeat: no-repeat;
  background-position: 97%;
  font-size: 14px;
  line-height: 16px;
  padding-left: 8px;
  padding-top: 15px;
  height: 54px;
  border-radius: 6px;
  flex: 1 1 auto;
  order: 2;
  border: ${props => (props.error ? ' 1px solid #eb5757' : '1px solid #f2f2f2')};
  &:focus {
    background: transparent;
    border: ${props => (props.error ? ' 1px solid #eb5757' : '#f2f2f2')};
  }
  &:focus + ${Label} {
    transform: scale(0.8) translate3d(10px, 30px, 0);
  }
  & + ${Label} {
    transform: ${props => props.content && 'scale(0.8) translate3d(10px, 30px, 0)'};
  }
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

const Error = styled.div`
  margin-top: 5px;
  font-size: 12px;
  line-height: 14px;
  color: #eb5757;
`

const Description = styled.div`
  font-size: 14px;
  margin-bottom: 15px;
`

export const AuthForm = () => {
  const dispatch = useDispatch()
  const [animate, setAnimate] = useState(false)
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Невалидный почтовый ящик').required('Поле обязательно для заполнения'),
        password: Yup.string().min(8, 'Пароль должен иметь не менее 8 символов').required('Поле обязательно для заполнения'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        resetForm(value => (value = ''))
        setSubmitting(false)
        dispatch(login())
      }}
    >
      {formik => {
        const { errors, touched, values } = formik
        return (
          <Wrapper>
            <Transition in={animate} timeout={1000}>
              {state => (
                <Container state={state}>
                  <Description>Данные для входа</Description>
                  <FieldContainer>
                    <MyField
                      autocomplete='off'
                      success={values.email && !errors.email}
                      error={errors.email && touched.email}
                      content={values.email}
                      name='email'
                      type='email'
                    />
                    <Label>Логин*</Label>
                  </FieldContainer>
                  <ErrorMessage name='email'>{msg => <Error>{msg}</Error>}</ErrorMessage>
                  <FieldContainer>
                    <MyField
                      autocomplete='off'
                      success={values.password && !errors.password}
                      error={errors.password && touched.password}
                      content={values.password}
                      name='password'
                      type='password'
                    />
                    <Label>Пароль*</Label>
                  </FieldContainer>
                  <ErrorMessage name='password'>{msg => <Error>{msg}</Error>}</ErrorMessage>
                  <Buttons>
                    <Button onClick={() => setAnimate(!animate)} type='button' fill={false}>
                      Не помню пароль
                    </Button>
                    <Button fill={true}>
                      Войти в систему <img src={arrow} alt='' />
                    </Button>
                  </Buttons>
                </Container>
              )}
            </Transition>
            <Transition in={animate} timeout={1000}>
              {state => <Restore state={state} setAnimate={setAnimate} animate={animate} />}
            </Transition>
          </Wrapper>
        )
      }}
    </Formik>
  )
}
