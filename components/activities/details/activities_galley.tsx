import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const activities_gallery = ({ act_code }: any) => {
  const act = require('@/components/info/activities/info_activity')

  const slideProperties = {
    scale: 1,
    duration: 3500,
    trasitionDuration: 100,
    infinity: true,
    prevArrow: <button className='opacity-10 hover:opacity-100 active:opacity-50 h-full transition-opacity w-[30px] mx-[50px]'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M34.5 239L228.9 44.7c9.4-9.4 24.6-9.4 33.9 0l22.7 22.7c9.4 9.4 9.4 24.5 0 33.9L131.5 256l154 154.8c9.3 9.4 9.3 24.5 0 33.9l-22.7 22.7c-9.4 9.4-24.6 9.4-33.9 0L34.5 273c-9.4-9.4-9.4-24.6 0-33.9z"/></svg></button>,
    nextArrow: <button className='opacity-10 hover:opacity-100 active:opacity-50 h-full transition-opacity w-[30px] mx-[50px]'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M285.5 273L91.1 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.7-22.7c-9.4-9.4-9.4-24.5 0-33.9L188.5 256 34.5 101.3c-9.3-9.4-9.3-24.5 0-33.9l22.7-22.7c9.4-9.4 24.6-9.4 33.9 0L285.5 239c9.4 9.4 9.4 24.6 0 33.9z"/></svg></button>
  }

  if (act[act_code].gallery_component == null)
    return <></>
  else

    var image = []

  for (let i = 1; i <= act[act_code].gallery_component['total']; i++) {
    image.push(`/image/activities/${act_code}/img_${act_code}_${i}.jpg`)
  }

  return (
    <div className='w-full'>
      <div>
        <Slide {...slideProperties}>
          {image.map((each: any, index: number) => (
            <div key={index} >
              <div className='bg-cover bg-center ' style={{ backgroundImage: "url(" + each + ")" }}>
                <div className='bg-black bg-opacity-50 backdrop-blur-lg'>
                  <img className='w-full max-container max-h-[650px] object-cover' src={each} />
                </div>
              </div>
              <div className='bg-black bg-opacity-80 w-screen py-2 px-10 absolute bottom-0 opacity-0 transition-opacity hover:opacity-100'>
                <div className='w-full max-container flex justify-between'>
                  <div className='text-white content-center'>
                    Credit: {act[act_code].gallery_component['credit']}
                  </div>
                  <div className=''>
                    <a href={each} download={act[act_code].gallery_component['download_name']} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
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
          {act[act_code].gallery_component['caption'].map((each: any, index: number) => (
            <div key={index}>
              {each}
            </div>
          ))}
        </div>
        <div className='pt-10 pb-12 px-10 flexCenter'>
          <a href={act[act_code].gallery_component['link']} target='_blank' className='bg-yellow-dark py-4 px-6 rounded-full hover:bg-opacity-60 active:bg-opacity-80'>More image</a>
        </div>
      </div>
    </div>
  )
}

export default activities_gallery