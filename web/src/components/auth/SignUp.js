import { Link, navigate, routes } from '@redwoodjs/router'
import { useRef } from 'react'
import {
   Form,
   Label,
   TextField,
   PasswordField,
   FieldError,
   Submit,
} from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useEffect } from 'react'

const Signup = () => {
   const { isAuthenticated, signUp } = useAuth()

   useEffect(() => {
      if (isAuthenticated) {
         navigate(routes.home())
      }
   }, [isAuthenticated])

   // focus on email box on page load
   const usernameRef = useRef()
   useEffect(() => {
      usernameRef.current.focus()
   }, [])

   const onSubmit = async (data) => {
      const response = await signUp({ ...data })

      if (response.message) {
         toast(response.message)
      } else if (response.error) {
         toast.error(response.error)
      } else {
         // user is signed in automatically
         toast.success('Welcome!')
      }
   }

   return (
      <>
         <MetaTags title="Signup" />

         <div className="flex w-full items-center justify-center">
            <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
            <div className="card w-96 bg-base-100 shadow-xl rounded-none">
               <div className="card-body">
                  <h2 className="card-title">Signup</h2>

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
                        errorClassName="input rw-input-error"
                        autoComplete="current-password"
                        validation={{
                           required: {
                              value: true,
                              message: 'Password is required',
                           },
                        }}
                     />

                     <FieldError name="password" className="rw-field-error" />

                     <div className="rw-button-group">
                        <Submit className="btn btn-primary">Sign Up</Submit>
                     </div>
                  </Form>
                  <div className="rw-login-link">
                     <span>Already have an account?</span>{' '}
                     <Link to={routes.login()} className="link link-primary">
                        Log in!
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Signup
