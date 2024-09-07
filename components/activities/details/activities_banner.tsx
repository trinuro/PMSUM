import React from 'react';

const activities_banner = ({act_code}:any) => {
  return (
    <div className='w-full'>
        <img className='w-screen max-h-96 object-cover' src={`/image/activities/${act_code}/img_${act_code}_0.jpg`}/>
    </div>
  )
}

export default activities_banner