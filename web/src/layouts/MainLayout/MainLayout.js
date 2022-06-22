import Navbar from 'src/components/Navbar'

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default MainLayout
