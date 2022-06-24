import { render } from '@redwoodjs/testing/web'

import InviteesPage from './InviteesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InviteesPage', () => {
   it('renders successfully', () => {
      expect(() => {
         render(<InviteesPage />)
      }).not.toThrow()
   })
})
