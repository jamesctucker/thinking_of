import { Link, navigate, routes } from '@redwoodjs/router'
import { useRef } from 'react'
import {
   Form,
   Label,
   TextField,
   PasswordField,
   Submit,
   FieldError,
} from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useEffect } from 'react'

const LoginPage = () => {
   const { isAuthenticated, logIn } = useAuth()

   useEffect(() => {
      if (isAuthenticated) {
         navigate(routes.home())
      }
   }, [isAuthenticated])

   const usernameRef = useRef()
   useEffect(() => {
      usernameRef.current.focus()
   }, [])

   const onSubmit = async (data) => {
      const response = await logIn({ ...data })

      if (response.message) {
         toast(response.message)
      } else if (response.error) {
         toast.error(response.error)
      } else {
         toast.success('Welcome back!')
      }
   }

   return (
      <>
         <MetaTags title="Login" />

         <div className="flex w-full items-center justify-center">
            <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
            <div className="card w-96 bg-base-100 shadow-xl rounded-none">
               <div class="card-body">
                  <h2 className="card-title">Login</h2>

                  <Form onSubmit={onSubmit}>
                     <Label
                        name="username"
                        className="label"
                        errorClassName="rw-label rw-label-error"
                     >
                        Username
                     </Label>
                     <TextField
                        name="username"
                        className="input input-bordered w-full"
                        errorClassName="rw-input rw-input-error"
                        ref={usernameRef}
                        validation={{
                           required: {
                              value: true,
                              message: 'Username is required',
                           },
                        }}
                     />

                     <FieldError name="username" className="rw-field-error" />

                     <Label
                        name="password"
                        className="label"
                        errorClassName="rw-label rw-label-error"
                     >
                        Password
                     </Label>
                     <PasswordField
                        name="password"
                        className="input input-bordered w-full"
                        errorClassName="rw-input rw-input-error"
                        autoComplete="current-password"
                        validation={{
                           required: {
                              value: true,
                              message: 'Password is required',
                           },
                        }}
                     />

                     <div className="rw-forgot-link">
                        <Link
                           to={routes.forgotPassword()}
                           className="link link-primary"
                        >
                           Forgot Password?
                        </Link>
                     </div>

                     <FieldError name="password" className="rw-field-error" />

                     <div className="rw-button-group">
                        <Submit className="btn btn-primary">Login</Submit>
                     </div>
                  </Form>
                  <div className="rw-login-link">
                     <span>Don&apos;t have an account?</span>{' '}
                     <Link to={routes.signup()} className="link link-primary">
                        Sign up!
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default LoginPage
