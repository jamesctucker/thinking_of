import { useContext } from 'react'
import { SurveyContext } from 'src/contexts/SurveyContext'
import { Form, Label, InputField, FieldError } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { useForm } from 'react-hook-form'
import SurveyButtons from 'src/components/SurveyButtons'
import { useState } from 'react'
import { TrashIcon, PlusIcon } from '@heroicons/react/solid'

const CREATE_EVENT = gql`
   mutation CreateEventMutation($input: CreateEventInput!) {
      createEvent(input: $input) {
         id
         name
      }
   }
`

const InviteesPage = () => {
   const { register, setValue } = useForm()
   const { currentUser, isAuthenticated } = useAuth()
   const [create, { loading, error }] = useMutation(CREATE_EVENT)
   const { formData, setFormData } = useContext(SurveyContext)

   const handleSubmit = () => {
      if (isAuthenticated && currentUser.id) {
         create({
            variables: {
               input: {
                  name: formData.name,
                  eventType: formData.eventType,
                  eventDate: formData.eventDate,
                  userId: currentUser.id,
               },
            },
         })
      } else {
         navigate(routes.login())
      }
   }

   const [inputFields, setInputFields] = useState([
      { firstname: '', email: '' },
   ])

   const handleFormChange = (index, event, input) => {
      // this sets the value of the input field with the corresponding index
      // https://react-hook-form.com/api/useform/setvalue
      setValue(`event.target.name-${index}`, event.target.value)

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
                  <div key={index} className="flex flex-row items-start">
                     <div className="flex flex-col w-2/5">
                        <Label
                           name={`firstname-${index}`}
                           className="label"
                           errorClassName="label label-error"
                        >
                           First name
                        </Label>
                        <InputField
                           {...register(`firstname-${index}`)}
                           name={`firstname-${index}`}
                           className="input input-bordered w-full"
                           errorClassName="input input-error w-full"
                           onChange={(event) =>
                              handleFormChange(index, event, input)
                           }
                           validation={{
                              required: 'this field is required',
                           }}
                        />
                        <FieldError
                           name={`firstname-${index}`}
                           className="text-error text-sm mb-2"
                        />
                     </div>

                     <div className="flex flex-col ml-4 w-3/5">
                        <Label
                           name={`email-${index}`}
                           className="label"
                           errorClassName="label label-error"
                        >
                           Email
                        </Label>
                        <div className="flex flex-row">
                           <InputField
                              {...register(`email-${index}`)}
                              name={`email-${index}`}
                              className="input input-bordered w-full"
                              errorClassName="input input-error w-full"
                              onChange={(event) =>
                                 handleFormChange(index, event, input)
                              }
                              validation={{
                                 required: 'this field is required',
                              }}
                           />
                           {index !== 0 && (
                              <button
                                 className="btn btn-ghost ml-2"
                                 onClick={(event) => removeField(event, index)}
                              >
                                 <TrashIcon className="text-error h-5 w-5 shadow-lg" />
                              </button>
                           )}
                        </div>
                        <FieldError
                           name={`email-${index}`}
                           className="text-error text-sm mb-2"
                        />
                     </div>
                     {/* <div className="w-1/12">

                     </div> */}
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
            <SurveyButtons
               nextText="Complete"
               backText="Back"
               backIcon="true"
               disabled={false}
            />
         </Form>
      </div>
   )
}
export default InviteesPage
