
import { Swiper, SwiperSlide } from "swiper/react";
import { CharacterImage } from "./CharacterImage";
import "swiper/css";

export function SliderCharacters({ characeters }: { characeters: string[] }) {
  return (
    <div className="w-full h-[18rem] mt-4">
      <Swiper
        slidesPerView={3.2}
        className="mySwiper h-[18rem]"
      >
        {characeters.map((apiUrl) => {
          return (
            <SwiperSlide key={apiUrl}>
              <div className={`h-full w-full  text-black`}>
                <CharacterImage apiUrl={apiUrl} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
