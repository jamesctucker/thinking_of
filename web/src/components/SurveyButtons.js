import BackButton from 'src/components/BackButton'
import { Submit } from '@redwoodjs/forms'
import { ArrowRightIcon } from '@heroicons/react/solid'

const SurveyButtons = ({
   backText,
   nextText,
   nextIcon = false,
   backIcon = false,
   disabled = false,
}) => {
   return (
      <div className="survey-buttons flex justify-between mt-10">
         <BackButton text={backText} backIcon={backIcon} />
         <Submit className="btn btn-primary" disabled={disabled}>
            {nextText}
            {nextIcon && <ArrowRightIcon className="h-5 w-5 ml-2" />}
         </Submit>
      </div>
   )
}
export default SurveyButtons
