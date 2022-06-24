import { back } from '@redwoodjs/router'

const BackButton = ({ text }) => {
   return (
      <button className="btn btn-outline" type="submit" onClick={back}>
         {text}
      </button>
   )
}
export default BackButton
