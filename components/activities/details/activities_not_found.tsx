import React from 'react';

const activities_not_found = () => {
  return (
    <div className='w-full '>
      <div className='md:flex md:h-full items-center max-container' style={{minHeight: 'calc(100vh - 500px)'}}>
        <div className='w-full content-center md:p-10'>
          <img src='/icon/404-not-found.svg' className='size-96 mx-auto'/>
        </div>
        <div className='md:w-4/5 md:h-full content-center p-20 md:p-10 '>
          <div className='font-extrabold text-4xl'>
            Haiyaa. 404 not found
          </div>
          <div className=''>
            If you think this is a mistake, please contact the <a href='/acknowledgements' className='text-blue-700 hover:text-blue-400 active:text-blue-600'>web developer</a> for help.
          </div>
        </div>
      </div>

    </div>
  )
}

export default activities_not_found