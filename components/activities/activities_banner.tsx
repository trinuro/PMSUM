import React from 'react';

const activities_banner = (props: any) => {
  return (
    <div className='w-full'>
      <div key={props.index} >
        <img className='w-screen max-h-96 object-cover' src={props.src} />
      </div>
    </div>
  )
}

export default activities_banner