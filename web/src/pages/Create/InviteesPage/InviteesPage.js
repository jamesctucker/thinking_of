import { Form, Label, TextField } from '@redwoodjs/forms'
import SurveyButtons from 'src/components/SurveyButtons'

const InviteesPage = () => {
   const handleSubmit = (data) => {
      console.log(data)
   }
   return (
      <div className="w-full md:w-3/5 lg:w-1/3">
         <h1>Who would you like to contribute to this video?</h1>
         <Form onSubmit={handleSubmit}>
            <Label
               name="invitees"
               className="label"
               errorClassName="rw-label rw-label-error"
            >
               Email
            </Label>
            <TextField
               name="invitees"
               className="input input-bordered w-full"
               errorClassName="rw-input rw-input-error"
            />
            <SurveyButtons />
         </Form>
      </div>
   )
}
export default InviteesPage
