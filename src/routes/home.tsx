const Home = () => {
  return (
    <div id="home-container" className="flex w-full h-full bg-gray-600 justify-center">
      <div id="hero" className="flex flex-row w-full h-1/2 px-20 center-size">
        <div id="show-stack" className="flex flex-col w-40 justify-center">
          <span className="text-center self-center text-4xl font-semibold">Order cakes from us!</span>
          <span className="text-center self-center">We provide classic cakes and make it anyway you want!</span>
        </div>
        <img src="./IMG_0003.PNG" alt="Showcase Cake" className="w-1/5 object-contain"/>
      </div>
    </div>
  )
}

export default Home