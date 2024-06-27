const Location = () => {
  const googleApiKey = import.meta.env.VITE_GOOGLE_API_KEY;

  return (
    <div className="main-container">
      <div className="page-container">
        <div id="g-map-text-container" className="flex flex-row items-center">
          <iframe 
            width="600" 
            height="450" 
            loading="lazy"
            allowFullScreen 
            src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJIQhG6stawokRhodYMao8d6M&key=${googleApiKey}`}
          />

          <div id="visit-us-text-stack" className="flex flex-col p-8 items-center text-center gap-y-8">

            <span
              className="w-1/2 text-3xl"
            >Come visit us at 4618 8th Avenue in Brooklyn, New York!</span>

            <span
              className="w-1/2 text-2xl"
            >We have a wide variety of pre-made cakes, Chinese buns, and drinks.</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Location