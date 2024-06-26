import Masonry from "react-responsive-masonry"
import { useMediaQuery } from "@mantine/hooks"

const Gallery = () => {
  const urls = [
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
    './IMG_2764.png',
    './IMG_2773.png',
    './IMG_2774.png',
    './IMG_2786.png',
    './IMG_2855.png',
    './IMG_2859.png',
    './IMG_3607.png',
    './IMG_4625.png',
  ];

  const isMobile = useMediaQuery(`(max-width: 640px)`);

  const masonItems = urls.map( (url, index) => {
    return (
      <img
        key={index}
        src={url}
        className="rounded-lg w-full"
      />
    )
  })

  return (
    <div className="main-container">
      <span className="text-xl text-center p-8">Welcome to the Gallery! Here's a showcase of the many cakes we've done in the past.</span>

      {
        isMobile ?
          <div className="flex flex-col p-8 gap-y-4">
            {masonItems}
          </div>
        :
          <Masonry
            columnsCount={2}
            gutter="1rem"
            className="p-8"
          >
            {masonItems}
          </Masonry>
      }
    </div>
  )
}

export default Gallery