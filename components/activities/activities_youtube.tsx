import React from 'react';

const activities_youtube = (props: any) => {

  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: "url(https://img.youtube.com/vi/" + props.id + "/maxresdefault.jpg)" }}>
      <div className='w-full md:h-[420px] p-10 bg-black bg-opacity-60 md:content-center'>
        <div className='max-container flex flex-col-reverse md:flex-row md:justify-center'>
          <div className='w-full flexCenter my-10 md:my-0'>
            <iframe
              width="424"
              height="238"
              src={`https://www.youtube.com/embed/` + props.id}
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
      <div className='absolute inset-x-0 text-center -m-12'>
        <div className='text-center font-bold text-xl text-white'>
          {props.ack}
        </div>
      </div>
    </div>
  )
}

export default activities_youtube