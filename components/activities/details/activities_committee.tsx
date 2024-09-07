'use client'

import React from 'react';
import { useState } from 'react';
import Slider from "react-slick"; //npm install react-slick --save && npm install @types/react-slick --save
import "slick-carousel/slick/slick.css"; // npm install slick-carousel
import "slick-carousel/slick/slick-theme.css";

const activities_committee = ({act_code}:any) => {
  const act = require('@/components/info/activities/info_activity')

  if (act[act_code].committee_list == null) {
    return <></>
  }
  else {
    const [selected, setSelected] = useState(act[act_code].committee_list[0]);

    const changePositionHandler = (event: any) => {
      setSelected(event.target.value);
    }

    var image = []

    for (let i = 1; i <= act[act_code].committee_image[selected].total; i++) {
      image.push(`/image/activities/${act_code}/committee/${selected}/img_com_${act[act_code].committee_image[selected].code}_${i}.jpg`)
    }

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: (image.length < 3) ? image.length : 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1536, // width to change options
          settings: {
            slidesToShow: (image.length < 2) ? image.length : 2,
            slidesToScroll: 2,
            infinite: false,
            dots: true,
          }
        },
        {
          breakpoint: 1024, // width to change options
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
          }
        },
        {
          breakpoint: 640, // width to change options
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
            arrows: false,
          }
        },
      ]
    };

    return (
      <div className='max-container h-[650px] flex content-center p-10'>
        <div className='w-full'>
          <div>
            <div className='font-bold text-3xl'>Meet the committee</div>
          </div>
          <div className='mt-4'>
            <select id="committee" className='border-solid border-black border-2 rounded w-fit p-3' onChange={changePositionHandler}>
              {act[act_code].committee_list.map((each: string, index: number) => (
                <option key={index}>{each}</option>
              )
              )}
            </select>
          </div>
          <div className='mt-8 flexCenter bg-yellow-dark bg-opacity-50 rounded-md'>
            <div className='h-[400px] w-[400px] lg:w-[850px] 2xl:w-[1250px] content-center overflow-hidden'>
              <Slider {...settings}>
                {image.map((each: string, index: number) => (
                  <div key={index}>
                    <div className='w-full flex justify-center p-10' >
                      <img className='size-[240px] sm:size-[320px] transition hover:scale-110' src={each}></img>
                    </div>
                  </div>
                )
                )}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default activities_committee