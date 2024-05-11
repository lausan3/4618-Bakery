import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex flex-row 
                       w-full h-16
                       items-center justify-center
                     bg-purple-300">
      <Link to="/">Home</Link>
      <Link to="/location">Location</Link>
      <Link to="/showcase">Showcase</Link>
      <Link to="/order">Order</Link>
    </header>
  )
}

export default Header