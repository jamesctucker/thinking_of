import { render } from '@redwoodjs/testing/web'

import ConfirmationPage from './ConfirmationPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ConfirmationPage', () => {
   it('renders successfully', () => {
      expect(() => {
         render(<ConfirmationPage />)
      }).not.toThrow()
   })
})
