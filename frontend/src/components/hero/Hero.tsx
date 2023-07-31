import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { EffectFade, Autoplay } from "swiper/modules";

import VignetteOverlay from "./VignetteOverlay";
import heroMath from "../../assets/images/hero_math.webp";
import twoOnOffice from "../../assets/images/two_on_office.avif";
import girlOnLaptop from "../../assets/images/girl_on_laptop.avif";
import manOnMicroscope from "../../assets/images/man_on_microscope.avif";

export default function Hero() {
  return (
    <Swiper
      spaceBetween={30}
      effect="fade"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Autoplay]}
    >
      <VignetteOverlay />
      <SwiperSlide>
        <img src={manOnMicroscope} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={heroMath} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={twoOnOffice} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={girlOnLaptop} />
      </SwiperSlide>
    </Swiper>
  );
}
