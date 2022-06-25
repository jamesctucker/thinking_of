import { back } from '@redwoodjs/router'
import { ArrowLeftIcon } from '@heroicons/react/solid'

const BackButton = ({ text, backIcon = false }) => {
   return (
      <button className="btn btn-outline" type="submit" onClick={back}>
         {backIcon && <ArrowLeftIcon className="h-5 w-5 mr-2" />}
         {text}
      </button>
   )
}
export default BackButton
