'use client'

import React from 'react';
import { useState } from 'react';
import Slider from "react-slick"; //npm install react-slick --save && npm install @types/react-slick --save
import "slick-carousel/slick/slick.css"; // npm install slick-carousel
import "slick-carousel/slick/slick-theme.css";

const activities_committee = (props: any) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive:[
      {
        breakpoint: 1440, // width to change options
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
    ]
  };

  const [selected, setSelected] = useState("Logistik dan Pengangkutan");
  

  const changePositionHandler = (event: any) =>{
    setSelected(event.target.value);
  }

  var url = "/image/activities/act1/committee/"+ selected

  return (
    <div className='max-container h-[600px] flex content-center p-10'>
      <div className='w-full'>
        <div>
          <div className='font-bold text-3xl'>Meet the committee</div>
        </div>
        <div className='mt-4'>
          <select id="committee" className='border-solid border-black border-2 rounded w-fit p-3' onChange={changePositionHandler}>
            {props.list.map((each: string, index: number) => (
              <option key={index}>{each}</option>
            )
            )}
          </select>
        </div>
        <div className='mt-8 flexCenter bg-yellow-dark bg-opacity-50'>
          <div className='w-[320px] h-[400px] xl:w-[1300px] content-center'>
            <Slider {...settings}>
              {props.image.map((each: string, index: number) => (
                <div key={index}>
                  <div className='w-full flex justify-center' >
                    <img className='size-[320px] transition hover:scale-110' src={each}></img>
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

export default activities_committee