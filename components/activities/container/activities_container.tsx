import React from "react";

const colour = [
  'red-dark',
  'yellow-dark',
  'black'
];

interface HighlightProp {
  icon: string,
  icon_alt_name: string,
  name: string,
  highlighted_picture: string,
  date: string,
  main_page_link: string,
  description: string
}

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

export const activity_card = (index: number, { icon, icon_alt_name, name, highlighted_picture, date, main_page_link, description }: HighlightProp, bg_color: string = 'transparent') => {

  return (
    <div key={index} className='p-10'>
      <a href={main_page_link}>
        <div className={`w-[250px] h-[350px] p-4 border-2 border-solid rounded-lg hover:scale-110 active:scale-105 transition bg-white border-${colour[index]}`}>
          <div className="w-full h-[80px] flex justify-between items-center">
            <div className="w-[60px] h-[60px] overflow-hidden">
              <img className="object-cover h-full w-full" src={"/image/activities/" + icon} />
            </div>
            <div className=" w-[140px] font-extrabold text-lg uppercase leading-5">
              <div>{name}</div>
            </div>
          </div>
          <div className="my-4 ">
            <div className="overflow-hidden h-[140px] rounded-lg">
              <img className="object-cover h-full w-full " src={"/image/activities/" + highlighted_picture} />
            </div>
          </div>
          <div className="text-center">
            <IsOrganised date={date} />
            <div>{date}</div>
          </div>
        </div>
      </a>
    </div>


  )
}