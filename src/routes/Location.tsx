const Location = () => {
  const googleApiKey = import.meta.env.VITE_GOOGLE_API_KEY;

  return (
    <div className="main-container">
      <div className="page-container">
        <div className="g-map-text-container">
          <div className="g-map-container">

            <iframe 
              className="w-full h-full"
              loading="lazy"
              allowFullScreen 
              src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJIQhG6stawokRhodYMao8d6M&key=${googleApiKey}`}
            />
          </div>

          <div className="visit-us-text-stack">

            <div className="english-chinese-stack text-3xl">

              <span>Come visit us at 4618 8th Avenue in Brooklyn, New York!</span>
              <span className="font-tc">歡迎來到紐約布魯克林第八大道 4618 號拜訪我們！</span>
              
            </div>

            <div className="english-chinese-stack text-2xl">

              <span>We have a wide variety of pre-made cakes, Chinese buns, and drinks.</span>
              <span className="font-tc">我哋有各種各樣嘅預製蛋糕、中式包子同嘢飲。</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Location