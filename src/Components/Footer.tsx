// import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="
      flex flex-col justify-center items-center w-full py-8 bg-main-color gap-y-2
      sm:flex-row
    ">
      <a href="https://github.com/lausan3" target="_blank" className="text-base sm:text-xl">Designed by Anthony Lau</a>
      {/* <div id="spacer" className="w-20"></div> */}
      {/* <Link className="text-base sm:text-lg" to="/support">Having trouble with our website?</Link> */}
    </footer>
  )
}

export default Footer