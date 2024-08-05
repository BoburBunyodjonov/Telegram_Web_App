// Carusel Img
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// imgs
import Banner1 from "../images/5iPs5Z1pBnlutCaoRpz6kkQYHQlYV2D2LETsL7nO.png";

// Carusel
import Slider from "react-slick";
import { Typography } from "@mui/material";

interface SliderSettings {
  dots: boolean,
  infinite: boolean,
  speed: number,
  slidesToShow: number,
  slidesToScroll: number,
  autoplay: boolean,
}


const SliderBanner = () => {

    const settings:SliderSettings= {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };

  return (
    <Slider {...settings} className="bg-white p-5 rounded-xl">
       <div className="rounded-xl">
            <div className="rounded-xl relative ">
                <img className="w-full rounded-xl" src={Banner1}  alt="Banner Img 1" />
                <Typography  className="font-bold absolute p-5 text-white bottom-0 left-0" variant="h4">Breand Zara</Typography>
            </div>
       </div>
       <div className="rounded-xl">
            <div className="bg-white relative rounded-xl">
                <img className="w-full rounded-xl"  src={Banner1}  alt="Banner Img 1" />
                <Typography className="absolute left-0 p-5 text-white bottom-0 z-40 font-bold " variant="h4">Maktab Bozor</Typography>
            </div>
       </div>
       
    </Slider>
  )
}

export default SliderBanner
