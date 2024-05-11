import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex flex-row justify-center w-full h-20 bg-purple-300">
      <div className="flex flex-row center-size w-full items-center justify-between px-14">
        <div className="flex flex-row">
          <Link to="/" className="text-2xl link-underline">Meet Cake Bakery</Link>
        </div>

        <div className="flex flex-row gap-x-6">
          <Link to="/location" className="text-xl link-underline">Location</Link>
          <Link to="/showcase" className="text-xl link-underline">Showcase</Link>
          <Link to="/order" className="text-xl link-underline">Order</Link>
        </div>
      </div>
    </header>
  )
}

export default Header