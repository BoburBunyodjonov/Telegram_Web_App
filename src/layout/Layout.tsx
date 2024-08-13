
import { Outlet } from "react-router-dom"
import { Navbar } from "../components"



const Layout = () => {
  return (
    <>
         <div className="md:max-w-[500px] container overflow-scroll h-[90vh]  mx-auto">
          <Outlet />
         </div>
         <Navbar/>


    </>
  )
}

export default Layout