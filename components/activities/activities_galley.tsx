'use client'

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const activities_gallery = (props: any) => {
  const slideProperties = {
    scale: 1,
    duration: 3500,
    trasitionDuration: 100,
    infinity: true,
  }

  return (
    <div className='w-full'>
      <div>
        <Slide {...slideProperties}>
          {props.gallery.map((each: string[], index: number) => (
            <div key={index} >
              <img className='w-screen max-h-screen object-cover' src={each[0]} />
            </div>
          )
          )}
        </Slide>
      </div>
      <div className='pt-8 max-container w-full'>
        <div className=' px-20'>
          {props.caption}
        </div>
        <div className='py-10 px-20'>
          <a href={props.link} className='bg-yellow-dark p-4 rounded-full hover:bg-opacity-60 active:bg-opacity-80'>More image</a>
        </div>
      </div>
    </div>
  )
}

export default activities_gallery