import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="
      flex flex-row justify-center w-full px-10 py-8 bg-main-color
      shadow-2xl z-[2]
    ">
      <div className="
        flex flex-col items-center gap-y-1
        sm:flex-row sm:center-size"
      >
        <Link to="/" className="
          text-2xl text-nowrap"
        >Meet Cake Bakery</Link>

        <div className="w-52"></div>

        <div className="
          flex flex-row px-5 my-2 gap-5"
        >
          <Link to="/location" className="text-xl link-underline">Location</Link>
          <Link to="/showcase" className="text-xl link-underline">Showcase</Link>
          <Link to="/order" className="text-xl link-underline">Order</Link>
        </div>
      </div>
    </header>
  )
}

export default Header