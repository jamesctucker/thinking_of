import BackButton from 'src/components/BackButton'
import { Submit } from '@redwoodjs/forms'

const SurveyButtons = () => {
   return (
      <div className="survey-buttons flex justify-between my-6">
         <BackButton text="back" />
         <Submit className="btn btn-primary">Next</Submit>
      </div>
   )
}
export default SurveyButtons
