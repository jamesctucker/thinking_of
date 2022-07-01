// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout'
import { SurveyProvider } from './contexts/SurveyContext'

const Routes = () => {
   return (
      <Router>
         <Set wrap={MainLayout}>
            <Route path="/login" page={LoginPage} name="login" />
            <Route path="/signup" page={SignupPage} name="signup" />
            <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
            <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
            <Set wrap={SurveyProvider}>
               <Route path="/create" page={CreateCreatePage} name="create" />
               <Route path="/create/event-details" page={CreateEventDetailsPage} name="eventDetails" />
               <Route path="/create/invitees" page={CreateInviteesPage} name="invitees" />
               <Route path="/create/login" page={LoginPage} name="createLogin" />
               <Route path="/create/confirmation" page={CreateConfirmationPage} name="confirmation" />
            </Set>
            <Route path="/" page={HomePage} name="home" />
            <Route notfound page={NotFoundPage} />
         </Set>
      </Router>
   )
}

export default Routes
