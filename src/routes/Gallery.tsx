import { Grid, Image } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';

const Gallery = () => {
  const urls = [
    // './IMG_2763.HEIC',
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

  const isMobile = useMediaQuery(`(max-width: 640px)`);
  
  const images = urls.map((url) => {
    return (
      <Grid.Col 
        className="p-0"
        span={isMobile ? 6 : 3}
      >
        <Image 
          className="object-fill"
          src={url} 
        />
      </Grid.Col>
    )
  });

  // https://mantine.dev/core/grid/
  return (
    <div className="main-container">
      <span className="text-xl text-center px-5">Welcome to the Gallery! Here's a showcase of the many cakes we've done in the past.</span>

      <Grid
        className="
          my-5 p-5
        "
        gutter="sm"
      >
        {images}
      </Grid>
    </div>
  )
}

export default Gallery