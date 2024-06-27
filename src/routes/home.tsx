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
    './IMG_2736.png',
    './IMG_2741.png',
    './IMG_2752.png',
    './IMG_2773.png',
    './IMG_2774.png',
    './IMG_2786.png',
    './IMG_2855.png',
    './IMG_2859.png',
    './IMG_3607.png',
    './IMG_4625.png',
  ];

  const slides = images.map( (url, index) => {
      return (
        <img
          key={index}
          src={url}
          className="carousel-image"
        />
      )
    }
  )
  
  
  return (
    <div id="home-container" className="main-container">
      <div className="page-container w-full">

        <div id="hero" className="main-hero">
          <div id="hero-stack" className="hero-stack">
            <span className="hero-stack-heading">Custom-Made Cakes for any Occasion.</span>
            <span className="hero-stack-subheading">We provide cakes made-to-order for your event</span>
            <Link className="hero-stack-call-to-action" to="/order">Contact Us</Link>
          </div>
          <img src="./IMG_0003.PNG" alt="Showcase Cake" className="hero-image"/>
        </div>

        <div 
          id="carousel" 
          className="carousel-container"
        >
          <span className="carousel-heading">We've served the community for over 20 years making quality, classic cakes for parties, weddings, and more!</span>

          <span className="carousel-label">Here's a preview of our work</span>

          <Carousel 
            className="carousel"
            arrows
            autoplay
          >
            {slides}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Home