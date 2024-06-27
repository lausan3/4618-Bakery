import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <Link to="/" className="logo">

          <div className="logo-top-container">
            <strong className="logo-top-chinese">遇見</strong>
            <strong className="logo-top-english">Meet</strong>
          </div>

          <span className="logo-bottom">4618 Bakery</span>

        </Link>

        <div className="header-spacer"></div>

        <div className="header-directory-container"
        >
          <Link to="/location" className="header-directory-item">Location</Link>
          <Link to="/gallery" className="header-directory-item">Gallery</Link>
          <Link to="/order" className="header-directory-item">Order</Link>
        </div>
      </div>
    </header>
  )
}

export default Header