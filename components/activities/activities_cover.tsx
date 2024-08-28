import React from 'react';

const activities_cover = (props: any) => {
  return (
    <div className='w-full'>
      <div className='relative h-screen  overflow-hidden -mt-[50px]'>
        <div className='h-screen '>
          <video className='h-full w-full object-cover' autoPlay muted loop>
            <source src={props.video_src} type="video/mp4" />
          </video>
          <div>
            <div className='absolute bg-black bg-opacity-60 top-0 w-full h-full'></div>
          </div>
        </div>
        <div className='absolute h-full content-center top-0'>
          <div className='p-10 md:translate-x-6 transition max-w-xl md:max-w-7xl'>
            <div className='text-4xl md:text-8xl font-bold text-white'>{props.title}</div>
            <div className='text-xl md:text-4xl font-bold text-white mt-2'>{props.date} | {props.location}</div>
            <div className='flex'>
              <div className='mt-6'><a className='' href='#banner'><button className='p-4 bg-yellow-dark rounded-md transition hover:scale-110 active:scale-105'>Learn more</button></a></div>
              <div className='mt-6 ml-4'><a className='' href={props.video_url} target='_blank'><button className='p-4 bg-yellow-dark rounded-md transition hover:scale-110 active:scale-105'>Watch video</button></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default activities_cover