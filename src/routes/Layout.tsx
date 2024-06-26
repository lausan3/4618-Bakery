import { Outlet } from "react-router-dom"
import Header from "./../components/Header"
import Footer from "./../components/Footer"

const Layout = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center">
      <Header />
      <div className="flex w-full flex-grow justify-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout