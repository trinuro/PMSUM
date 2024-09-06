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

const Description = ({description}: any) => {
  if (description[0] == "")
    return <></>
  else
    return (
      <div className='bg-yellow-dark bg-opacity-40'>
        <div className='pt-10 pb-6 px-10 md:px-20 w-full max-container '>
          {description.map((each: any, index: number) => (
            <div key={index} className='mb-4'>
              {each}
            </div>
          ))}
        </div>
      </div>
    )
}

const activities_title = ({act_code}: any) => {
  const act = require('@/components/info/activities/info_activity')
  return (
    <div>
      <div className='w-full max-container pl-10 md:pl-20 md:pr-10 lg:pr-20' >
        <div className='py-6 bg-no-repeat bg-right-top bg-[length:200px]' style={{ backgroundImage: `url(/image/activities/${act_code}/${act_code})` }}>
          <div className='w-[200px] sm:w-full'>
            <div className='font-semibold text-4xl'>{act[act_code].title}</div>
            <div className='text-xl text-gray-500 sm:flex '>
              <div ><IsOrganised date={act[act_code].date} />&nbsp;</div>
              <div > {act[act_code].date}</div>
            </div>
          </div>
        </div>
      </div>
      <Description description={act[act_code].description} />
    </div>
  )
}

export default activities_title