import React, { useReducer, useEffect } from 'react'

let reducer = (formData, newFormData) => {
   if (newFormData === null) {
      localStorage.removeItem('formData')
      return initialState
   }
   return { ...formData, ...newFormData }
}

const SurveyContext = React.createContext()
const initialState = []
const localState = JSON.parse(localStorage.getItem('formData'))

function SurveyProvider(props) {
   const [formData, setFormData] = useReducer(
      reducer,
      localState || initialState
   )

   useEffect(() => {
      localStorage.setItem('formData', JSON.stringify(formData))
   }, [formData])

   const resetLocalStorage = () => {
      localStorage.removeItem('formData')
   }

   return (
      <SurveyContext.Provider
         value={{ formData, setFormData, resetLocalStorage }}
      >
         {props.children}
      </SurveyContext.Provider>
   )
}

export { SurveyContext, SurveyProvider }
