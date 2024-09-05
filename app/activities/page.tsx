'use client'
import React from 'react';
import Slideshow from "@/components/activities/main/slideshow_activities";
import { activity_list } from '@/components/info/activities/info_main';
import { activity_card } from '@/components/activities/container/activities_container';
import Slider from "react-slick"; //npm install react-slick --save && npm install @types/react-slick --save
import "slick-carousel/slick/slick.css"; // npm install slick-carousel
import "slick-carousel/slick/slick-theme.css";



export default function Activities() {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: (activity_list.list.length < 3) ? activity_list.list.length : 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1536, // width to change options
        settings: {
          slidesToShow: (activity_list.list.length < 2) ? activity_list.list.length : 2,
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
    <main>
      <Slideshow />
      <div className='flex justify-center'>
        <div className='w-full max-w-7xl p-8'>
          <div className='font-semibold text-xl sm:text-3xl'>All activities</div>
          <div className='flex justify-center flex-wrap'>
            {/* <Slider {...settings}>
              {
                activity_list.list.map((highlight, index) => activity_card(index, highlight))
              }

            </Slider> */}
            {
              activity_list.list.map((highlight, index) => activity_card(index, highlight))
            }

          </div>
          <div className='text-center text-sm sm:text-base m-4'>
            Last updated: {activity_list.date}
          </div>
        </div>
      </div>
      <div>
      </div>
    </main>
  );
}

