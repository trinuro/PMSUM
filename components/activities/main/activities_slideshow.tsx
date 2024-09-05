"use client";

import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideshow_activities = (props: any) => {

  const slideProperties = {
    scale: 1,
    duration: 3500,
    trasitionDuration: 300,
    infinity: true,
    arrows: false,
  }

  const act = require('@/components/info/activities/info_activity')

  return (
    <div className='w-full'>
      <Zoom {...slideProperties}>
        {props.slide.slice(0, 3).map((each: any, index: number) => (
          <div key={index} >
            <img className='w-screen max-h-[420px] object-cover' src={`/image/activities/${each}/img_${each}_0.jpg`} />
            <a href={`/activities/details?code=${each}`}>
              <div className='bg-black flex justify-center absolute bottom-0 top-0 left-0 right-0 transition-opacity bg-opacity-50 opacity-0 hover:opacity-100'>
                <div className='content-center w-full max-w-7xl'>
                  <div className='font-extrabold text-white text-center text-xl sm:max-w-xs sm:mx-14 sm:text-3xl lg:text-5xl sm:text-left'>
                    {act[each].title}
                  </div>
                  <div className='font-bold text-white text-center text-sm sm:mx-14 sm:text-xl sm:text-left'>
                    {act[each].subtitle}
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </Zoom>
    </div>
  )
}

export default slideshow_activities