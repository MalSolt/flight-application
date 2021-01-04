import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as Yup from 'yup'
import { isAuth } from '../../redux/authReducer'
import { getIsAuthorized } from '../../redux/selectors'
import s from './Auth.module.scss'

export const Auth = () => {
  const isAuthorized = useSelector(getIsAuthorized)
  const dispatch = useDispatch()
  if (isAuthorized) return <Redirect to='/main' />
  return (
    <div className={s.authPage}>
      <div className={s.auth}>
        <h1>Simple Flight Check</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object({
            email: Yup.string().email('Невалидный почтовый ящик').required('Поле обязательно для заполнения'),
            password: Yup.string()
              .matches(/^[\x00-\x7F]*$/, 'кириллица запрещена')
              .min(8, 'Пароль должен иметь не менее 8 символов')
              .required('Поле обязательно для заполнения'),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            resetForm(value => (value = ''))
            setSubmitting(false)
            dispatch(isAuth(true))
          }}
        >
          {formik => {
            const { errors, touched } = formik
            return (
              <Form className={s.form}>
                <label className={errors.email && touched.email ? s.errorLabel : ''} htmlFor='email'>
                  Логин:
                </label>
                <Field className={errors.email && touched.email ? s.fieldError : s.field} name='email' type='email' />
                <ErrorMessage name='email'>{msg => <div className={s.error}>{msg}</div>}</ErrorMessage>
                <label className={errors.password && touched.password ? s.errorLabel : ''} htmlFor='password'>
                  Пароль:
                </label>
                <Field className={errors.password && touched.password ? s.fieldError : s.field} name='password' type='password' />
                <ErrorMessage name='password'>{msg => <div className={s.error}>{msg}</div>}</ErrorMessage>
                <button type='submit'>Submit</button>
              </Form>
            )
          }}
        </Formik>
      </div>
    </div>
  )
}
