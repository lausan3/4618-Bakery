import { Outlet } from "react-router-dom"
import Header from "../Components/Header"

const Layout = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center">
      <Header />
      <div className="flex w-full flex-grow justify-center">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout