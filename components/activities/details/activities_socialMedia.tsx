'use client'

import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed'; //npm install react-social-media-embed

const activities_socialMedia = (props: any) => {
  if (props.insta == null)
    return <></>
  else
    return (
      <div className="bg-cover bg-center" style={{ backgroundImage: `url("/image/activities/${props.code}/${props.bg_image}")` }}>
        <div className='w-full p-10 bg-black bg-opacity-80 md:bg md:content-center'>
          <div className='max-container md:flex md:justify-center'>
            <div className='w-full flexCenter'>
              <div className='text-center md:text-left text-5xl font-extrabold  text-white'>
                <div>Wanna know more?</div>
                <div>Follow us now</div>
              </div>
            </div>
            <div className='w-full flexCenter my-10 md:my-0'>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <InstagramEmbed url={`https://www.instagram.com/p/${props.insta}`} height={420} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default activities_socialMedia