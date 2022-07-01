import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ConfirmationPage = () => {
   return (
      <>
         <MetaTags title="Confirmation" description="Confirmation page" />
         <div className="flex flex-col items-center justify-center">
            <h1>ConfirmationPage</h1>
            <p>Your event has been created!</p>
         </div>
      </>
   )
}

export default ConfirmationPage
