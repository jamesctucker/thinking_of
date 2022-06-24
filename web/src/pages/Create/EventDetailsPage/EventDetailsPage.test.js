import { render } from '@redwoodjs/testing/web'

import EventDetailsPage from './EventDetailsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EventDetailsPage', () => {
   it('renders successfully', () => {
      expect(() => {
         render(<EventDetailsPage />)
      }).not.toThrow()
   })
})
