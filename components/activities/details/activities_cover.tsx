import React from 'react';

const activities_cover = ({act_code}:any) => {
  const act = require('@/components/info/activities/info_activity')
  return (
    <div className='w-full'>
      <div className='relative h-screen overflow-hidden -mt-[50px]'>
        <div className='h-screen '>
          <video className='h-full w-full object-cover' autoPlay muted loop>
            <source src={`/image/activities/${act_code}/vid_${act_code}_0.mp4`} type="video/mp4" />
          </video>
          <div>
            <div className='absolute bg-black bg-opacity-60 top-0 w-full h-full'></div>
          </div>
        </div>
        <div className='absolute h-full flex flex-col justify-center top-0 '>
          <div className='p-10 md:translate-x-6 transition max-w-xl md:max-w-7xl'>
            <div className='text-4xl md:text-8xl font-bold text-white'>{act[act_code].title}</div>
            <div className='text-xl md:text-4xl font-bold text-white mt-2'>{act[act_code].date} | {act[act_code].location}</div>
            <div className='flex'>
              <div className='mt-6'><a href='#banner'><button className='p-4 bg-yellow-dark rounded-md transition hover:scale-110 active:scale-105'>Learn more</button></a></div>
              <div className='mt-6 ml-5'><a href={act[act_code].video_url} target='_blank'><button className='p-4 bg-yellow-dark rounded-md transition hover:scale-110 active:scale-105'>Watch trailer</button></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default activities_cover