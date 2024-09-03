import React from 'react';

const IsOrganised = ({ date }: any) => {
  if (Date.parse(date) < new Date().getTime())
    return (
      'Organised on:'
    )
  else
    return (
      'Coming Soon:'
    )
}

const activities_title = (props: any) => {
  return (
    <div>
      <div className='w-full max-container py-6 px-20'>
        <div className='font-semibold text-4xl'>{props.title}</div>
        <div className='text-xl text-gray-500'><IsOrganised date={props.date} /> {props.date}</div>
      </div>
      <div className='bg-yellow-dark bg-opacity-40'>
        <div className='pt-10 pb-6 px-20 w-full max-container '>
          {props.description.map((each: any, index: number) => (
            <div key={index} className='mb-4'>
              {each}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default activities_title