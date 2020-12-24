import React from 'react'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'

export const Slider = () => {
  const slides = useSelector(state => state.slider.slides)
  return (
    <Swiper spaceBetween={100} slidesPerView={4}>
      {slides.map((slide, i) => (
        <SwiperSlide key={slide + i}>
          <img src={slide} alt='' />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
