import { Carousel } from "antd"
import { Link } from "react-router-dom"

const Home = () => {
  const images = [
    './IMG_6042.PNG',
    './IMG_6043.PNG',
    './IMG_6044.PNG',
    './IMG_6045.PNG',
    './IMG_6046.PNG',
    './IMG_6050.PNG',
    './IMG_6051.PNG',
    './IMG_6052.PNG',
    './IMG_6053.PNG',
    './IMG_6054.PNG',
    './IMG_6055.PNG',
    './_com.apple.Pasteboard.Aydaf0.PNG',
    './_com.apple.Pasteboard.Pa3lOk.PNG',
    './_com.apple.Pasteboard.S9ZbU9.PNG',
    './_com.apple.Pasteboard.tfHHHi.PNG',
    './IMG_1155.PNG',
  ];

  const slides = images.map( (url, index) => {
      return (
        <img
          key={index}
          src={url}
          className="sm:h-[700px] object-contain"
        />
      )
    }
  )


  return (
    <div id="home-container" className="main-container">
      <div id="hero" className="main-hero">
        <div id="hero-stack" className="
          flex flex-col text-center items-center gap-5
        ">
          <span className="text-3xl font-semibold">Custom-Made Cakes for any Occasion.</span>
          <span className="text-xl">We provide cakes made-to-order for your event</span>
          <Link className="px-4 py-2 bg-main-color rounded-lg font-semibold" to="/order">Contact Us</Link>
        </div>
        <img src="./IMG_0003.PNG" alt="Showcase Cake" className="
          p-10
          sm:w-[60%] sm:object-contain sm:p-0"
        />
      </div>

      <div 
        id="carousel" 
        className="
        flex flex-col py-2 mt-6 bg-gray-300 w-full
        shadow-2xl z-[2]
        sm:center-size sm:min-w-full"
      >
        <span className="
          p-5 self-center
          text-lg text-center font-semibold w-[80%]
          sm:w-[40%] sm:text-2xl
        ">We've served the community for over 20 years making quality, classic cakes for parties, weddings, and more!</span>
        <Carousel 
          className="p-24 w-full sm:p-8"
          arrows
          autoplay
        >
          {slides}
        </Carousel>
      </div>
    </div>
  )
}

export default Home