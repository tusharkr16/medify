import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../../assets/Group 11.png";
import img2 from "../../assets/image 1.png";
import 'swiper/css';
import 'swiper/css/pagination';
import './Carousel.css';
import { Pagination } from 'swiper/modules';

const Carousel = () => {
    return (
        <div className='carousel-container px-9'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className=''>
                    <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img src={img1} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Carousel;
