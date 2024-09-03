"use client";

import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideshow_activities = () => {
  const items = [
    ["/image/slide/slide1.png", "FEDERALISME DI MALAYSIA", "Kesatuan Dalam Kepelbagaian", "/activities/2024/federalisme2024"],
    ["/image/slide/slide2.png", "PESTA KENYALANG", "2024", "/activities/2024/pestakenyalang2024"],
    ["/image/slide/slide3.png", "DISKUSI BELANJAWAN SAWAWAK", "/activities/2024/dbs2024"],
  ]

  const slideProperties = {
    scale: 1,
    duration: 3500,
    trasitionDuration: 300,
    infinity: true,
    arrows: false,
  }

  return (
    <div className='w-full'>
      <Zoom {...slideProperties}>
        {items.map((each, index) => (
          <div key={index} >
            <img className='w-screen max-h-[420px] object-cover' src={each[0]} />
            <a href={each[3]}>
            <div className='bg-black flex justify-center absolute bottom-0 top-0 left-0 right-0 transition-opacity bg-opacity-50 opacity-0 hover:opacity-100'>
              
                <div className='content-center w-full max-w-7xl'>
                  <div className='font-extrabold text-white text-center text-xl sm:max-w-xs sm:mx-14 sm:text-3xl lg:text-5xl sm:text-left'>
                    {each[1]}
                  </div>
                  <div className='font-bold text-white text-center text-sm sm:mx-14 sm:text-xl sm:text-left'>
                    {each[2]}
                  </div>
                </div>
              
            </div>
            </a>
          </div>
        )
        )}
      </Zoom>
    </div>
  )
}

export default slideshow_activities