import React from "react";

const colour = 'red-dark';
interface HighlightProp {
  icon: string,
  icon_alt_name: string,
  name: string,
  highlighted_picture: string,
  date: string,
  main_page_link: string,
  description: string
}

export const activity_card = (index: Number, { icon, icon_alt_name, name, highlighted_picture, date, main_page_link, description }: HighlightProp, bg_color: string = 'transparent') => {

  return (
    <div className='mx-4 p-10 '>
      

    </div>


  )
}