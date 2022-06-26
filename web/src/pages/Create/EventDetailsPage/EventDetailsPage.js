import React, { useContext } from 'react'
import { SurveyContext } from 'src/contexts/SurveyContext'
import { Form, Label, TextField, SelectField } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
// import { useMutation } from '@redwoodjs/web'
import SurveyButtons from 'src/components/SurveyButtons'
// import { useAuth } from '@redwoodjs/auth'

// const CREATE_EVENT = gql`
//    mutation CreateEventMutation($input: CreateEventInput!) {
//       createEvent(input: $input) {
//          id
//          name
//       }
//    }
// `

const EventDetailsPage = () => {
   const { formData, setFormData } = useContext(SurveyContext)
   // const [create] = useMutation(CREATE_EVENT)
   // const { isAuthenticated, currentUser } = useAuth()

   const handleSubmit = (data) => {
      setFormData(data)
      // const completeData = {
      //    ...data,
      //    userId: currentUser.id,
      //    eventDate: new Date().toISOString(),
      // }
      // create({ variables: { input: completeData } })
      navigate(routes.invitees())
   }

   return (
      <div className="w-full sm:3/4 lg:w-3/5">
         <h1>You're one step closer to making someone's day!</h1>
         <Form onSubmit={handleSubmit}>
            <Label
               name="name"
               className="label"
               errorClassName="rw-label rw-label-error"
            >
               Who is this event for?
            </Label>
            <TextField
               name="name"
               className="input input-bordered w-full"
               errorClassName="rw-input rw-input-error"
               placeholder="first name"
            />
            <Label
               name="eventType"
               className="label"
               errorClassName="rw-label rw-label-error"
            >
               What kind of event is this?
            </Label>
            <SelectField
               name="eventType"
               className="select select-bordered w-full"
               multiple={false}
            >
               <option value="BIRTHDAY">birthday</option>
               <option>anniversary</option>
               <option>get well</option>
               <option>memorial</option>
            </SelectField>
            <SurveyButtons
               nextText="Next"
               backText="Back"
               nextIcon="true"
               backIcon="true"
               disabled={false}
            />
         </Form>
      </div>
   )
}

export default EventDetailsPage
