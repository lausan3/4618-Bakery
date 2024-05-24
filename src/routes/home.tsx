import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div id="home-container" className="
      flex w-full h-full bg-gray-300 justify-center pt-10"
    >
      <div id="hero" className="
        grid grid-rows-[auto,1fr] px-10 center-size
        sm:grid-cols-2 sm:grid-rows-1 sm:h-[60%] sm:items-center sm:justify-items-center"
      >
        <div id="hero-stack" className="
          flex flex-col text-center items-center gap-5"
        >
          <span className="text-3xl font-semibold">Custom-Made Cakes for any Occasion.</span>
          <span className="text-xl">We provide cakes made-to-order for your event</span>
          <Link className="
            px-4 py-2 bg-main-color rounded-3xl
          " to="/order">Contact Us</Link>
        </div>
        <img src="./IMG_0003.PNG" alt="Showcase Cake" className="
          p-10
          sm:w-[60%] sm:object-contain sm:p-0"
        />
      </div>

      <div id="card-showcase" className="flex">
        <section>

        </section>
      </div>
    </div>
  )
}

export default Home