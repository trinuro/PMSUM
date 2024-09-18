import React from 'react';

const activities_youtube = ({act_code}:any) => {
  const act = require('@/components/info/activities/info_activity')
  if (act[act_code].youtube_component == null)
    return <></>
  else
    return (
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(https://img.youtube.com/vi/${act[act_code].youtube_component['id']}/maxresdefault.jpg)` }}>
        <div className='w-full md:h-[500px] p-10 bg-black bg-opacity-80 md:bg md:content-center'>
          <div className='max-container flex flex-col-reverse md:flex-row md:justify-center'>
            <div className='w-full flexCenter my-10 md:my-0'>
              <iframe
                width="424"
                height="238"
                src={`https://www.youtube.com/embed/${act[act_code].youtube_component['id']}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
              </iframe>
            </div>
            <div className='w-full flexCenter'>
              <div className='text-center md:text-right text-5xl font-extrabold max-w-xs text-white'>
                Watch it on Youtube
              </div>
            </div>
          </div>
        </div>
        <div className='w-full absolute inset-x-0 -m-14 mx-auto'>
          <div className='text-center font-bold text-xl text-white'>
            {act[act_code].youtube_component['acknowledgement']}
          </div>
        </div>
      </div>
    )
}

export default activities_youtube