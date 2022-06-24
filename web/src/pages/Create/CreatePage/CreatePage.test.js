import { render } from '@redwoodjs/testing/web'

import CreatePage from './CreatePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CreatePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreatePage />)
    }).not.toThrow()
  })
})
