import BackButton from 'src/components/BackButton'
import { Submit } from '@redwoodjs/forms'
import { ArrowRightIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid'

const SurveyButtons = ({
   backText,
   nextText,
   nextIcon = false,
   backIcon = false,
   disabled = false,
   skip = false,
   onSkip,
}) => {
   return (
      <div className="survey-buttons flex justify-between mt-10">
         <BackButton text={backText} backIcon={backIcon} />
         <div className="flex flex-row">
            {skip && (
               <div className="flex flex-row items-center mr-4">
                  <button className="link mr-2" onClick={onSkip}>
                     Skip
                  </button>
                  <div
                     class="tooltip tooltip-bottom"
                     data-tip="you can still invite people after creating this event"
                  >
                     <QuestionMarkCircleIcon className="h-5 w-5" />
                  </div>
               </div>
            )}
            <Submit className="btn btn-primary" disabled={disabled}>
               {nextText}
               {nextIcon && <ArrowRightIcon className="h-5 w-5 ml-2" />}
            </Submit>
         </div>
      </div>
   )
}
export default SurveyButtons
