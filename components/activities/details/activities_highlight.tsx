'use client'

import React from 'react';
import Highlight_container from "../container/activities_highlight_container";
import Slider from "react-slick"; //npm install react-slick --save && npm install @types/react-slick --save
import "slick-carousel/slick/slick.css"; // npm install slick-carousel
import "slick-carousel/slick/slick-theme.css";

const activities_highlight = ({act_code}:any) => {
  const act = require('@/components/info/activities/info_activity')

  function SampleNextArrow(props: any) {
    const { className, onClick } = props;
    return (<div
      className={className}
      onClick={onClick}
    >
      <button className='opacity-50 hover:opacity-100 active:opacity-70 transition-opacity w-[30px] -ml-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M285.5 273L91.1 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.7-22.7c-9.4-9.4-9.4-24.5 0-33.9L188.5 256 34.5 101.3c-9.3-9.4-9.3-24.5 0-33.9l22.7-22.7c9.4-9.4 24.6-9.4 33.9 0L285.5 239c9.4 9.4 9.4 24.6 0 33.9z" /></svg></button>
    </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <button className='opacity-50 hover:opacity-100 active:opacity-70 transition-opacity w-[30px]'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M34.5 239L228.9 44.7c9.4-9.4 24.6-9.4 33.9 0l22.7 22.7c9.4 9.4 9.4 24.5 0 33.9L131.5 256l154 154.8c9.3 9.4 9.3 24.5 0 33.9l-22.7 22.7c-9.4 9.4-24.6 9.4-33.9 0L34.5 273c-9.4-9.4-9.4-24.6 0-33.9z" /></svg></button>

      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
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

  if (act[act_code].highlight == null)
    return <></>
  else
    return (
      <div>
        <div className="bg-cover bg-center" style={{ backgroundImage: "url(/image/activities/act1/img_act1_1.jpg)" }}>
          <div className='w-full md:h-[500px] bg-black bg-opacity-80 md:bg md:flex md:flex-col md:justify-center pt-10 md:pt-0'>
            <div className='max-container w-full md:flex md:justify-evenly '>
              <div className='w-full md:w-1/3 flexCenter'>
                <div className='text-center md:text-right text-5xl font-extrabold max-w-xs text-white'>
                  Highlights
                </div>
              </div>
              <div className='w-full flexCenter md:w-auto'>
                <div className='w-full sm:w-[400px] xl:w-[750px] '>
                  <Slider {...settings}>
                    {act[act_code].highlight.map((each: { image_url: string; title: string; subtitle: string; content: string; }[][], index: number) => (
                      <div key={index} >
                        <div className='h-[500px] items-center flex justify-center'>
                          <div>
                            <Highlight_container content={each[0]} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default activities_highlight