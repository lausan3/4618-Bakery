const Home = () => {
  return (
    <div id="home-container" className="
      flex w-full h-full bg-gray-300 justify-center py-10 
      max-sm:py-10"
    >
      <div id="hero" className="
        grid grid-cols-2 h-1/2 px-10 center-size
        max-sm:grid-rows-2 max-sm:grid-cols-1"
      >
        
        <div id="show-stack" className="
          flex flex-col justify-center"
        >
          <span className="text-center self-center text-3xl font-semibold">Custom-Made Cakes for any Occasion.</span>
          <span className="text-center self-center text-xl mt-3">We provide cakes made-to-order for your event</span>
        </div>
        <img src="./IMG_0003.PNG" alt="Showcase Cake" className="
          w-3/4 px-5 py-5 mx-auto object-contain
          max-sm:mt-4"
        />
      </div>
    </div>
  )
}

export default Home