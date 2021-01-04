import React from 'react'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import { getSlides } from '../../redux/selectors'

export const Slider = () => {
  const slides = useSelector(getSlides)
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
