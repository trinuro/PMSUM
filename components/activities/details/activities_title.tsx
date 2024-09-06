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

const Description = (props: any) => {
  if (props.description[0] == "")
    return <></>
  else
    return (
      <div className='bg-yellow-dark bg-opacity-40'>
        <div className='pt-10 pb-6 px-20 w-full max-container '>
          {props.description.map((each: any, index: number) => (
            <div key={index} className='mb-4'>
              {each}
            </div>
          ))}
        </div>
      </div>
    )
}

const activities_title = (props: any) => {
  return (
    <div>
      <div className='w-full max-container  pl-20 md:pr-10 lg:pr-20' >
        <div className='py-6 bg-no-repeat bg-right-top bg-[length:200px]' style={{ backgroundImage: `url(/image/activities/${props.code}/${props.icon})` }}>
          <div className='w-[200px] sm:w-full'>
            <div className='font-semibold text-4xl'>{props.title}</div>
            <div className='text-xl text-gray-500 sm:flex '>
              <div ><IsOrganised date={props.date} />&nbsp;</div>
              <div > {props.date}</div>
            </div>
          </div>
        </div>
      </div>
      <Description description={props.description} />
    </div>
  )
}

export default activities_title