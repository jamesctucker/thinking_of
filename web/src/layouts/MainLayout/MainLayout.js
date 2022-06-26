import Navbar from 'src/components/Navbar'
import Footer from 'src/components/Footer'

const MainLayout = ({ children }) => {
   return (
      <div className="flex flex-col h-screen justify-between">
         <Navbar />
         <main className="p-8 flex justify-center">{children}</main>
         <Footer />
      </div>
   )
}

export default MainLayout
