import Navbar from 'src/components/Navbar'

const MainLayout = ({ children }) => {
   return (
      <>
         <Navbar />
         <main className="p-8 flex justify-center">{children}</main>
      </>
   )
}

export default MainLayout
