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
        <Link to="/" id="logo" className="flex flex-col items-center">
          <div id="top-section" className="flex flex-row justify-center">
            <strong className="font-tc text-4xl">遇見</strong>
            <strong className="font-script text-3xl self-center">Meet</strong>
          </div>
          <span id="bottom-section" className="
            text-2xl text-nowrap"
          >4618 Bakery</span>
        </Link>

        <div className="w-96"></div>

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