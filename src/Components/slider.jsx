import React, { useEffect, useRef } from 'react';

// 1. Swiper React Components & Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// 2. Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { animate } from 'motion/mini';
import { spring } from 'motion';

import styles from './slider.module.css';
import slide5 from '../images/image_b9088841.jpg';
import slide3 from '../images/image_4939817e.jpg';
import slide4 from '../images/image_8e8fe5d1.jpg';

const Slider = () => {
  const animatedBoxRef = useRef(null);

  useEffect(() => {
    if (animatedBoxRef.current) {
      animate(
        animatedBoxRef.current,
        { transform: 'translateX(0px)', opacity: 1 },
        { type: spring, bounce: 0.5, duration: 0.8 }
      );
    }
  }, []);

  return (
    <div className='text-center pb-5 mb-5 skin' id='skincare'>
      <h1 className={`pb-4 ${styles.head}`}>
        I A travel <span style={{ color: '#c47184' }}>travel ideas</span>
      </h1>

      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '20px', 
          maxWidth: '1100px', 
          margin: '0 auto',
          overflow: 'hidden',
          padding: '0 15px'
        }}
      >
        {/* 1. Swiper Slider (left) */}
        <div style={{ flex: '1', height: '450px', minWidth: '0' }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            style={{ width: '100%', height: '100%' }}
          >
            <SwiperSlide>
              <img 
                src={slide5} 
                alt="Travel Idea 1" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} 
              />
            </SwiperSlide>

            <SwiperSlide>
              <img 
                src={slide3} 
                alt="Travel Idea 2" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} 
              />
            </SwiperSlide>

            <SwiperSlide>
              <img 
                src={slide4} 
                alt="Travel Idea 3" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} 
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* 2. Motion Animated Box (Right Side) */}

        <div // Ghalat: Object ko direct children ke tarah render kiya
// {{ backgroundColor: '#fff' }} 
          ref={animatedBoxRef}
          style={{
            width: '280px',
            height: '450px',
            backgroundColor: '#fff',
            border: '1px solid #eee',
            boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
            borderRadius: '10px',
            padding: '25px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'left',
            transform: 'translateX(-50px)',  
            opacity: 0,
            transition: 'opacity 0.3s ease'
          }}
        >
          <h3 style={{ color: '#062510', marginBottom: '15px', fontSize: '22px' }}>
            Plan Your Trip
          </h3>
          <p style={{ color: '#555', lineHeight: '1.6', fontSize: '14px' }}>
            Discover amazing destinations, travel tips, and curated packages for your next adventure.
          </p>
          <button 
            style={{ 
              marginTop: '20px', 
              padding: '10px 18px', 
              backgroundColor: '#042e04', 
              color: '#a8b4b4', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Explore More
          </button>
        </div>

      </div>
    </div>
  );
};

export default Slider;