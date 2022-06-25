import BackButton from 'src/components/BackButton'
import { Submit } from '@redwoodjs/forms'
import { ArrowRightIcon } from '@heroicons/react/solid'

const SurveyButtons = () => {
   return (
      <div className="survey-buttons flex justify-between mt-10">
         <BackButton text="back" />
         <Submit className="btn btn-primary">
            Next
            <ArrowRightIcon className="h-5 w-5 ml-2" />
         </Submit>
      </div>
   )
}
export default SurveyButtons
