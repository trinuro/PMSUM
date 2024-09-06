import React from 'react';

const activities_message = (props: any) => {
  if (props.message == null) {
    return <></>
  }
  else
    return (
      <div>
        <div className=' bg-red-dark bg-opacity-40'>
          <div className='pt-10 pb-6 px-10 md:px-20 w-full max-container '>
            {props.message.map((each: any, index: number) => (
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