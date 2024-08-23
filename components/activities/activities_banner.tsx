import React from 'react';

const activities_banner = (props: any) => {
  return (
    <div className='w-full'>
      <div key={props.index} >
        <img className='w-screen max-h-96 object-cover' src={props.src} />
        {/* <div className='shade flex justify-center absolute bottom-0 top-0 left-0 right-0 transition-opacity opacity-0 hover:opacity-100'>
          <div className='content-center w-full max-container'>
            <div className='uppercase font-extrabold text-white text-center text-xl sm:max-w-xs sm:mx-14 sm:text-3xl lg:text-5xl sm:text-left'>
              {props.title}
            </div>
            <div className='font-bold text-white text-center text-sm sm:mx-14 sm:text-xl sm:text-left'>
              {props.subtitle}
            </div>
          </div>
        </div> */}
      </div>
    </div>

  )
}

export default activities_banner