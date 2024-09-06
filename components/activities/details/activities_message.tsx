import React from 'react';

const activities_message = ({act_code}:any ) => {
  const act = require('@/components/info/activities/info_activity')
  if (act[act_code].message == null) {
    return <></>
  }
  else
    return (
      <div>
        <div className=' bg-red-dark bg-opacity-40'>
          <div className='pt-10 pb-6 px-10 md:px-20 w-full max-container '>
            {act[act_code].message.map((each: any, index: number) => (
              <div key={index} className='mb-4'>
                {each}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}

export default activities_message