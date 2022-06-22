import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import {
   Form,
   Label,
   TextField,
   SelectField,
   FieldError,
   Submit,
} from '@redwoodjs/forms'

const CreatePage = () => {
   const next = (data) => {
      console.log(data)
   }
   return (
      <>
         <MetaTags title="Create" description="Create page" />
         <div class="w-full md:w-3/5 lg:w-1/3">
            <h1>You're one step closer to making someone's day!</h1>
            <Form onSubmit={next}>
               <Label
                  name="receiverName"
                  className="rw-label"
                  errorClassName="rw-label rw-label-error"
               >
                  Who is this event for?
               </Label>
               <TextField
                  name="receiverName"
                  className="rw-input"
                  errorClassName="rw-input rw-input-error"
               />

               <Label
                  name="eventType"
                  className="rw-label"
                  errorClassName="rw-label rw-label-error"
               >
                  What kind of event is this?
               </Label>
               <SelectField
                  name="eventType"
                  className="rw-input"
                  multiple={false}
               >
                  <option>birthday</option>
                  <option>anniversary</option>
                  <option>get well</option>
                  <option>memorial</option>
               </SelectField>

               <Submit className="btn btn-primary my-6">Next</Submit>
            </Form>
         </div>
      </>
   )
}

export default CreatePage
