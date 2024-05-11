import { Outlet } from "react-router-dom"
import Header from "../Components/Header"

const Layout = () => {
  return (
    <div className="flex flex-col w-screen h-screen items-center p-0">
      <Header />
      <div className="flex w-full h-full justify-center">
        {/* <section className="content-section center-size"> */}
          <Outlet />
        {/* </section> */}
      </div>
    </div>
  )
}

export default Layout