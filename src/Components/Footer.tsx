import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="
      flex flex-row justify-center w-full bg-brand py-8
    ">
      <div id="grid" className="
        grid grid-rows-auto w-1/4 h-[90%] gap-y-10
        sm:grid-cols-2 sm:grid-rows-1
      ">

        <div className="show-stack gap-4 sm:gap-1 text-left">
          <span className="text-xl font-semibold">Directory</span>

          <Link to="/" className="text-base sm:text-lg">Home</Link>
          <Link to="/location" className="text-base sm:text-lg">Location</Link>
          <Link to="/gallery" className="text-base sm:text-lg">Gallery</Link>
          <Link to="/order" className="text-base sm:text-lg">Order</Link>
        </div>

        <div className="show-stack gap-4 sm:gap-1">
          <span className="text-xl font-semibold">About</span>

          <a href="https://github.com/lausan3" target="_blank" className="text-base sm:text-lg">Designed by lausan</a>
          {/* <div id="spacer" className="w-20"></div>
          <Link className="text-base sm:text-lg" to="/support">Having trouble with our website?</Link> */}
        </div>

      </div>

    </footer>
  )
}

export default Footer