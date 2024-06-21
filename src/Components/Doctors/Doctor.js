import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import kindimg from "../../assets/kindpng_1018785 1.png";
import { Pagination } from 'swiper/modules';
import './Doctor.css'; // Make sure to import the CSS file
import dr1 from "../../assets/div.med-stl-3-photo-inner (3).png"
import dr2 from "../../assets/div.med-stl-3-photo-inner (2).png"
import dr3 from "../../assets/div.med-stl-3-photo-inner (1).png"

const Doctor = () => {
    return (
        <div className='carousel-container px-9'>
            <Swiper
                slidesPerView={4.5}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='slide'>
                    <div className=''>
                        <img src={dr1} alt="Doctor" className='' />
                        <p className='text-quaternary-color text-xl pt-3'>Dr. Ankur Sharma</p>
                        <p className=''>Medicine</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <div className=''>
                        <img src={dr2} alt="" />
                        <p className='text-quaternary-color text-xl pt-3'>Dr. Ahmed Khan</p>
                        <p className=''>Orthopadics</p>

                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <div className=''>
                        <img src={dr3} alt="" />
                        <p className='text-quaternary-color text-xl pt-3'>Dr. Heena Aggarwal</p>
                        <p className=''>Neurologist</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <div className=''>
                        <img src={dr1} alt="" />
                        <p className='text-quaternary-color text-xl pt-3'>Dr. Heena Aggarwal</p>
                        <p className=''>Neurologist</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <div className=''>
                        <img src={dr2} alt="" />
                        <p className='text-quaternary-color text-xl pt-3'>Dr. Heena Aggarwal</p>
                        <p className=''>Neurologist</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <div className=''>
                        <img src={dr3} alt="" />
                        <p className='text-quaternary-color text-xl pt-3'>Dr. Heena Aggarwal</p>
                        <p className=''>Neurologist</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <div className=''>
                        <img src={dr1} alt="" />
                        <p className='text-quaternary-color text-xl pt-3'>Dr. Heena Aggarwal</p>
                        <p className=''>Neurologist</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Doctor;
