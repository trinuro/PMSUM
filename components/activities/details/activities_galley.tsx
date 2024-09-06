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
  if (props.gallery == null)
    return <></>
  else
    return (
      <div className='w-full'>
        <div>
          <Slide {...slideProperties}>
            {props.gallery.map((each: string[], index: number) => (
              <div key={index} >
                <div className='bg-cover bg-center ' style={{ backgroundImage: "url(" + each[0] + ")" }}>
                  <div className='bg-black bg-opacity-50 backdrop-blur-lg'>
                    <img className='w-full max-container max-h-[650px] object-cover' src={each[0]} />
                  </div>
                </div>
                <div className='bg-black bg-opacity-80 w-screen py-2 px-10 absolute bottom-0 opacity-0 transition-opacity hover:opacity-100'>
                  <div className='w-full max-container flex justify-between'>
                    <div className='text-white content-center'>
                      Credit: {each[1]}
                    </div>
                    <div className=''>
                      <a href={each[0]} download={props.download_name} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                        <span>Download</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
            )}
          </Slide>
        </div>
        <div className='pt-8 max-container w-full'>
          <div className=' px-10'>
            {props.caption}
          </div>
          <div className='pt-10 pb-12 px-10 flexCenter'>
            <a href={props.link} target='_blank' className='bg-yellow-dark py-4 px-6 rounded-full hover:bg-opacity-60 active:bg-opacity-80'>More image</a>
          </div>
        </div>
      </div>
    )
}

export default activities_gallery