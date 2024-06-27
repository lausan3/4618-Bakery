import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* <div id="grid" className="
        grid grid-rows-auto w-1/4 h-[90%] gap-y-10
        sm:grid-cols-2 sm:grid-rows-1
      "> */}

        <div className="show-stack">
          <span className="directory-text">Directory</span>

          <div className="directory-container">

            <div className="directory-left-container">

              <Link to="/" className="directory-item">Home</Link>
              <Link to="/gallery" className="directory-item">Gallery</Link>
            </div>

            <div className="directory-right-container">

              <Link to="/location" className="directory-item">Location</Link>
              <Link to="/order" className="directory-item">Order</Link>
            </div>

          </div>
        </div>

        {/* <div className="show-stack gap-4 sm:gap-1">
          <span className="text-xl font-semibold">About</span>

          <a href="https://github.com/lausan3" target="_blank" className="text-base sm:text-lg">Designed by lausan</a> */}
          {/* <div id="spacer" className="w-20"></div>
          <Link className="text-base sm:text-lg" to="/support">Having trouble with our website?</Link> */}
        {/* </div> */}

      {/* </div> */}

    </footer>
  )
}

export default Footer