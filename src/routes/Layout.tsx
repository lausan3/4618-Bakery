import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

const Layout = () => {
  return (
    <div className="outer-container">
      <Header />
      <div className="inner-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout