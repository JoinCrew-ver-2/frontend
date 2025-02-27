import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import image1 from '../../assets/001.png';
import image2 from '../../assets/002.png';
import image3 from '../../assets/003.png';

function ImageSlider() {
  const images = [image1, image2, image3];
  return (
    <ImageSliderStyle>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}  // 무한 반복 설정
        autoplay={{
          delay: 3000, // 3초마다 슬라이드 전환
          disableOnInteraction: false, // 사용자 상호작용 후에도 자동재생 유지
        }}
        speed={1500} // 전환 속도
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`slide-${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </ImageSliderStyle>
  );
};

const ImageSliderStyle = styled.div`
  width: 100%;

  .swiper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
      max-width: 95%;
      max-height: 100%;
      width: auto; 
      height: auto; 
      object-fit: contain; 
      border-radius: 8px;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    display:none;
  }
`;
export default ImageSlider;