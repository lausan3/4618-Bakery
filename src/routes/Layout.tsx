import { Outlet } from "react-router-dom"
import Header from "../Components/Header"

const Layout = () => {
  return (
    <div className="flex flex-col w-screen h-screen
                    items-center">
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout