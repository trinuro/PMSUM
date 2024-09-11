import React from "react";

const bg_colour = [
  'border-red-dark',
  'border-black',
  'border-yellow-dark',
];

const IsOrganised = ({ date }: any) => {
  if (Date.parse(date) < new Date().getTime())
    return (
      <div>Organised on</div>
    )
  else
    return (
      <div>Coming Soon</div>
    )
}

const act = require('@/components/info/activities/info_activity')

export const activity_card = (act_code:string, index: number) => {
  return (
    <div key={index} className='p-10'>
      <a href={`/activities/details?code=${act_code}`}>
        <div className={`w-[250px] h-[350px] p-4 border-2 border-solid rounded-lg hover:scale-110 hover:shadow-2xl active:scale-105 transition bg-white ${bg_colour[Number(act_code.substring(3)) % 3]}`}>
          <div className="w-full h-[80px] flex justify-between items-center">
            <div className="w-[60px] h-[60px] overflow-hidden">
              <img className="object-cover h-full w-full" src={`/image/activities/${act_code}/img_${act_code}_ico.jpg`} />
            </div>
            <div className=" w-[140px] font-extrabold text-lg uppercase leading-5">
              <div>{act[act_code].title}</div>
            </div>
          </div>
          <div className="my-4 ">
            <div className="overflow-hidden h-[140px] rounded-lg">
              <img className="object-cover h-full w-full " src={`/image/activities/${act_code}/img_${act_code}_0.jpg`} />
            </div>
          </div>
          <div className="text-center">
            <IsOrganised date={act[act_code].date} />
            <div>{act[act_code].date}</div>
          </div>
        </div>
      </a>
    </div>
  )
}