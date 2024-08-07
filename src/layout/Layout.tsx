
import { Outlet } from "react-router-dom"
import { Navbar } from "../components"



const Layout = () => {
  return (
    <>
         <div className="md:max-w-[500px] container overflow-scroll h-[89vh]  mx-auto">
          <Outlet />
          <Navbar/>
         </div>

    </>
  )
}

export default Layout