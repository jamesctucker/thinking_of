import { Form, Label, TextField, SelectField } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import SurveyButtons from 'src/components/SurveyButtons'

const EventDetailsPage = () => {
   const handleSubmit = (data) => {
      console.log(data)
      navigate(routes.invitees())
   }

   const disabled = () => {}
   return (
      <div className="w-full sm:3/4 lg:w-3/5">
         <h1>You're one step closer to making someone's day!</h1>
         <Form onSubmit={handleSubmit}>
            <Label
               name="receiverName"
               className="label"
               errorClassName="rw-label rw-label-error"
            >
               Who is this event for?
            </Label>
            <TextField
               name="receiverName"
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
               <option>birthday</option>
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
