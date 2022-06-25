import { Form, Label, InputField } from '@redwoodjs/forms'
import SurveyButtons from 'src/components/SurveyButtons'
import { useState } from 'react'
import { TrashIcon, PlusIcon } from '@heroicons/react/solid'

const InviteesPage = () => {
   const handleSubmit = () => {
      console.log(inputFields)
   }

   const [inputFields, setInputFields] = useState([
      { firstname: '', email: '' },
   ])

   const handleFormChange = (index, event) => {
      let data = [...inputFields]
      data[index][event.target.name] = event.target.value
      setInputFields(data)
   }

   const addField = (e) => {
      e.preventDefault()
      let newfield = { firstname: '', email: '' }

      setInputFields([...inputFields, newfield])
   }

   const removeField = (e, index) => {
      e.preventDefault()
      let data = [...inputFields]
      data.splice(index, 1)
      setInputFields(data)
   }

   return (
      <div className="w-full sm:3/4 lg:w-3/5">
         <h1>Who should be a part of this video?</h1>
         <p className="subtitle">
            We'll email each person a link to upload their own video
         </p>
         <Form onSubmit={handleSubmit}>
            {inputFields.map((input, index) => {
               return (
                  <div key={index} className="flex flex-row items-end">
                     <div className="flex flex-col w-5/12">
                        <Label
                           name="firstname"
                           className="label"
                           errorClassName="rw-label rw-label-error"
                        >
                           First name
                        </Label>
                        <input
                           name="firstname"
                           className="input input-bordered w-full"
                           value={input.firstname}
                           onChange={(event) => handleFormChange(index, event)}
                        />
                     </div>
                     <div className="flex flex-col ml-4 w-6/12">
                        <Label
                           name="email"
                           className="label"
                           errorClassName="rw-label rw-label-error"
                        >
                           Email
                        </Label>
                        <input
                           name="email"
                           className="input input-bordered w-full"
                           value={input.email}
                           onChange={(event) => handleFormChange(index, event)}
                        />
                     </div>
                     <div className="w-1/12 mb-4">
                        {index !== 0 && (
                           <button
                              className="btn btn-ghost"
                              onClick={(event) => removeField(event, index)}
                           >
                              <TrashIcon className="text-error h-5 w-5 shadow-lg" />
                           </button>
                        )}
                     </div>
                  </div>
               )
            })}
            <div className="flex justify-start my-4">
               <button
                  className="btn btn-outline btn-primary shadow-lg"
                  onClick={addField}
               >
                  <PlusIcon className="h-5 w-5 mr-2" />
                  Add another person
               </button>
            </div>
            <SurveyButtons />
         </Form>
      </div>
   )
}
export default InviteesPage
