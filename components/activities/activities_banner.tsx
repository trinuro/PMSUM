import React from 'react';

const activities_banner = (props: any) => {
  return (
    <div className='w-full'>
      <div>
        <img className='w-screen max-h-96 object-cover' src={`/image/activities/${props.code}/${props.src}`}/>
      </div>
    </div>
  )
}

export default activities_banner