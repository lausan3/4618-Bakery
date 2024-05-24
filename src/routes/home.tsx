const Home = () => {
  return (
    <div id="home-container" className="
      flex w-full h-full bg-gray-300 justify-center pt-10"
    >
      <div id="hero" className="
        grid grid-rows-[auto,1fr] px-10 center-size
        sm:grid-cols-2 sm:grid-rows-1 sm:h-[75%] sm:items-center sm:justify-items-center"
      >
        <div id="hero-stack" className="
          flex flex-col"
        >
          <span className="text-center self-center text-3xl font-semibold">Custom-Made Cakes for any Occasion.</span>
          <span className="text-center self-center text-xl mt-3">We provide cakes made-to-order for your event</span>
        </div>
        <img src="./IMG_0003.PNG" alt="Showcase Cake" className="
          p-10
          sm:w-[75%] sm:object-contain sm:p-0"
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