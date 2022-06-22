import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const Navbar = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <div className="navbar bg-base-100 p-4">
      <div className="navbar-start">
        <Link className="btn btn-ghost normal-case text-xl" to={routes.home()}>Thinking Of</Link>
      </div>
      <div className="navbar-end">
        <Link className="btn btn-primary mx-2" to={routes.create()}>Create</Link>
        {isAuthenticated && (<button className="btn btn-outline mx-2" onClick={logOut}>Logout</button>)}
        {!isAuthenticated && (<Link className="btn btn-outline mx-2" to={routes.login()}>Login</Link>)}

      </div>
    </div>
  )
}

export default Navbar;