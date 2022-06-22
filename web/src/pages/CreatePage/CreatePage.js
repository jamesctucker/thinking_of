import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CreatePage = () => {
  return (
    <>
      <MetaTags title="Create" description="Create page" />

      <h1>CreatePage</h1>
      <p>
        Find me in <code>./web/src/pages/CreatePage/CreatePage.js</code>
      </p>
      <p>
        My default route is named <code>create</code>, link to me with `
        <Link to={routes.create()}>Create</Link>`
      </p>
    </>
  )
}

export default CreatePage
