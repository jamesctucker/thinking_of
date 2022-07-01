import React, { useContext } from 'react'
import { SurveyContext } from 'src/contexts/SurveyContext'
import {
   Form,
   Label,
   TextField,
   SelectField,
   DateField,
} from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import SurveyButtons from 'src/components/SurveyButtons'

const EventDetailsPage = () => {
   const { formData, setFormData } = useContext(SurveyContext)

   const handleSubmit = (data) => {
      setFormData(data)
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
               className="input input-bordered w-full md:w-3/5"
               errorClassName="rw-input rw-input-error"
               placeholder="first name"
            />
            <Label
               name="eventType"
               className="label"
               errorClassName="rw-label rw-label-error"
            >
               What's the occasion?
            </Label>
            <SelectField
               name="eventType"
               className="select select-bordered w-full md:w-3/5"
               multiple={false}
            >
               <option value="BIRTHDAY">birthday</option>
               <option>anniversary</option>
               <option>get well</option>
               <option>memorial</option>
            </SelectField>
            <Label
               name="eventDate"
               className="label"
               errorClassName="rw-label rw-label-error"
            >
               When is the event?
            </Label>
            <DateField
               name="eventDate"
               className="input input-bordered w-full md:w-3/5"
            />
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
