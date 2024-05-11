import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex flex-row justify-center w-full py-5 bg-main-color">
      <div className="flex flex-row center-size items-center justify-between px-10 py-2">
        <Link to="/" className="text-2xl">Meet Cake Bakery</Link>

        <div className="flex flex-row ml-auto gap-x-6 px-5 origin-top-right">
          <Link to="/location" className="text-xl link-underline">Location</Link>
          <Link to="/showcase" className="text-xl link-underline">Showcase</Link>
          <Link to="/order" className="text-xl link-underline">Order</Link>
        </div>
      </div>
    </header>
  )
}

export default Header