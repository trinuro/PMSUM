import React from 'react';
import Banner from '../../../../components/activities/activities_banner';
import Gallery from '../../../../components/activities/activities_galley';
import Highlight from '../../../../components/activities/activities_highlight';
import Objective from '../../../../components/activities/activities_objective';
import SocialMedia from '../../../../components/activities/activities_socialMedia';
import Title from '../../../../components/activities/activities_title';
import Youtube from '../../../../components/activities/activities_youtube';
import { act1 } from '../../../../components/activities/info/activities_info';
import { Sofadi_One } from 'next/font/google';

export default function Activities() {
  return (
    <main>
      <div className='relative h-screen  overflow-hidden -mt-[50px]'>
        <div className='h-screen '>
          <video className='h-full w-full object-cover' autoPlay muted loop>
            <source src='/image/activities/act1/vid_act1_01.mp4' type="video/mp4" />
          </video>
          <div>
            <div className='absolute bg-black bg-opacity-60 top-0 w-full h-full'></div>
          </div>
        </div>
        <div className='absolute h-full content-center top-0'>
          <div className='p-10 md:translate-x-6 transition max-w-xl md:max-w-7xl'>
            <div className='text-4xl md:text-8xl font-bold text-white'>Diskusi Belanjawan Sarawak</div>
            <div className='text-xl md:text-4xl font-bold text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            <div className='mt-6'><a className='font-' href='https://www.instagram.com/reel/C74DkNGyqVZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank'><button className='p-4 bg-yellow-dark rounded-md transition hover:scale-110 active:scale-105'>Watch video</button></a></div>      
          </div>
        </div>

      </div>
      <div>
        <Banner src={act1.banner_image_source} title={act1.title} subtitle={act1.subtitle} />
      </div>
      <div>
        <Title title={act1.title} date={act1.date} description={act1.description} />
      </div>
      <div>
        <Objective content={act1.objective} />
      </div>
      <div>
        <Youtube id={act1.youtube_id} ack={act1.youtube_acknowledgement} />
      </div>
      <div>
        <Highlight content={act1.highlight} />
      </div>
      <div>
        <Gallery gallery={act1.gallery} caption={act1.gallery_caption} link={act1.gallery_link} download_name={act1.gallery_download_name} />
      </div>
      <div>
        <SocialMedia />
      </div>
    </main>
  );
}

