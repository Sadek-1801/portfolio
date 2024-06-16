import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import img1 from "../../assets/images/slide1.png"
import img2 from "../../assets/images/slide-2.png"
import img3 from "../../assets/images/slide-3.png"
import img4 from "../../assets/images/slide4.png"

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
  };

  return (
    <Slider {...settings}>
      <div>
        <img className='object-cover' src={img1} alt="Image 1" />
      </div>
      <div>
        <img className='object-cover' src={img2} alt="Image 1" />
      </div>
      <div>
        <img className='object-cover' src={img3} alt="Image 1" />
      </div>
      <div>
        <img className='object-cover' src={img4} alt="Image 1" />
      </div>
      
      {/* Add more images as needed */}
    </Slider>
  );
};

export default ImageSlider;