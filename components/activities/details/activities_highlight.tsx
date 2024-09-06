'use client'

import React from 'react';
import Highlight_container from "../container/activities_highlight_container";
import Slider from "react-slick"; //npm install react-slick --save && npm install @types/react-slick --save
import "slick-carousel/slick/slick.css"; // npm install slick-carousel
import "slick-carousel/slick/slick-theme.css";

const activities_highlight = (props: any) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  if (props.content == null)
    return <></>
  else
    return (
      <div>
        <div className="bg-cover bg-center" style={{ backgroundImage: "url(/image/activities/act1/img_act1_1.jpg)" }}>
          <div className='w-full md:h-[500px] bg-black bg-opacity-80 md:bg md:content-center pt-10 md:pt-0'>
            <div className='max-container md:flex md:justify-evenly '>
              <div className='w-full md:w-1/3 flexCenter'>
                <div className='text-center md:text-right text-5xl font-extrabold max-w-xs text-white'>
                  Highlights
                </div>
              </div>
              <div className='w-full flexCenter md:w-auto'>
                <div className='w-[380px] xl:w-[680px] overflow-hidden'>
                  <Slider {...settings}>
                    {props.content.map((each: { image_url: string; title: string; subtitle: string; content: string; }[][], index: number) => (
                      <div key={index} >
                        <div className='h-[500px] content-center flexCenter'>
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