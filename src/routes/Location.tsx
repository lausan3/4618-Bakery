const Location = () => {
  const googleApiKey = import.meta.env.VITE_GOOGLE_API_KEY;

  return (
    <div className="main-container">
      <div className="page-container">
        <div id="g-map-text-container" className="flex flex-col sm:flex-row">
          <div 
            id="g-map-container" 
            className="w-full h-[500px]"
          >

            <iframe 
              className="w-full h-full"
              loading="lazy"
              allowFullScreen 
              src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJIQhG6stawokRhodYMao8d6M&key=${googleApiKey}`}
            />
          </div>

          <div id="visit-us-text-stack" className="flex flex-col items-center text-center gap-y-8 p-8 pb-0 sm:p-8">

            <div className="flex flex-col">

              <span
                className="text-3xl"
              >Come visit us at 4618 8th Avenue in Brooklyn, New York!</span>
              <span
                className="text-3xl"
              >歡迎來到紐約布魯克林第八大道 4618 號拜訪我們！</span>
              
            </div>

            <div className="flex flex-col">

              <span
                className="text-2xl"
              >We have a wide variety of pre-made cakes, Chinese buns, and drinks.</span>
              <span
                className="text-2xl"
              >我哋有各種各樣嘅預製蛋糕、中式包子同嘢飲。</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Location