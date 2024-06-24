import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation } from 'swiper/modules';
import Slot from '../Components/Slot';

const Dio = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
    };

    return (
        <div className="max-w-4xl mx-auto p-4 flex flex-col">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                slidesPerView={3}
                spaceBetween={30}
                onSlideChange={handleSlideChange}
            >
                {[
                    { label: 'Today', slots: '11 Slots Available', id: 0 },
                    { label: 'Tommorow', slots: '13 Slots Available', id: 1 },
                    { label: 'July 3', slots: '16 Slots Available', id: 2 },
                    { label: 'July 4', slots: '14 Slots Available', id: 3 },
                    { label: 'July 5', slots: '18 Slots Available', id: 4 },
                    { label: 'July 6', slots: '11 Slots Available', id: 5 },
                    { label: 'July 7', slots: '11 Slots Available', id: 6 },
                    { label: 'July 8', slots: '11 Slots Available', id: 7 },
                    { label: 'July 9', slots: '11 Slots Available', id: 8 }
                ].map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className='px-2 flex flex-col'>
                            <h3 className={`${activeIndex === index ? 'font-semibold text-xl ' : 'text-xl'}`}>{slide.label}</h3>
                            {slide.slots && (
                                <p className={`${activeIndex === index ? 'font-bold underline text-sm' : ''} text-green-700 text-sm`}>
                                    {slide.slots}
                                </p>
                            )}
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='flex space-x-40 px-20 mt-8 flex-col border border-black'>
                <Slot />
            </div>
        </div>
    );
}

export default Dio;
