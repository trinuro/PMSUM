import React from 'react';

const activities_title = (props: any) => {
  return (
    <div>
      <div className='w-full max-container py-6 px-20'>
        <div className='font-semibold text-4xl'>{props.title}</div>
        <div className='text-xl text-gray-500'>Organised on: {props.date}</div>
      </div>
      <div className='text-center bg-yellow-dark bg-opacity-40'>
        <div className='py-10 px-20 w-full max-container '>{props.description}</div>
      </div>
    </div>
  )
}

export default activities_title