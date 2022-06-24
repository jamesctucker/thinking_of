import { useState } from 'react'
import { MetaTags } from '@redwoodjs/web'
import Survey from 'src/components/survey/Survey'

const CreatePage = () => {
   const [step, setStep] = useState(1)
   return (
      <>
         <MetaTags title="Create" description="Create page" />
         <h1>Welcome!</h1>
      </>
   )
}

export default CreatePage
