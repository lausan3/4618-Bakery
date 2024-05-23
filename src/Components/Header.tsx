import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="
      flex flex-row justify-center w-full py-8 bg-main-color
      shadow-2xl z-[2]
    ">
      <div className="
        flex flex-col items-center justify-between center-size
        sm:flex-row"
      >
        <Link to="/" className="
          text-2xl"
        >Meet Cake Bakery</Link>

        <div className="
          flex flex-row ml-auto px-5 my-2 gap-2"
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