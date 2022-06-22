import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const MainLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
      <header>
        {isAuthenticated && (<p>{currentUser.email}</p>)}
        {isAuthenticated && (<button className="btn btn-primary" onClick={logOut}>Logout</button>)}
        {!isAuthenticated && (<Link to={routes.login()}>Login</Link>)}
      </header>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
