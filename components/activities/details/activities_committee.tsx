import React from 'react';
import { useState } from 'react';
import Slider from "react-slick"; //npm install react-slick --save && npm install @types/react-slick --save
import "slick-carousel/slick/slick.css"; // npm install slick-carousel
import "slick-carousel/slick/slick-theme.css";

const activities_committee = ({ act_code }: any) => {
  const act = require('@/components/info/activities/info_activity')


  function SampleNextArrow(props: any) {
    const { className, onClick } = props;
    return (<div
      className={className}
      onClick={onClick}
    >
      <button className='opacity-50 hover:opacity-100 active:opacity-80 transition-opacity w-[30px] -ml-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M285.5 273L91.1 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.7-22.7c-9.4-9.4-9.4-24.5 0-33.9L188.5 256 34.5 101.3c-9.3-9.4-9.3-24.5 0-33.9l22.7-22.7c9.4-9.4 24.6-9.4 33.9 0L285.5 239c9.4 9.4 9.4 24.6 0 33.9z" /></svg></button>
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
        <button className='opacity-50 hover:opacity-100 active:opacity-80 transition-opacity w-[30px]'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M34.5 239L228.9 44.7c9.4-9.4 24.6-9.4 33.9 0l22.7 22.7c9.4 9.4 9.4 24.5 0 33.9L131.5 256l154 154.8c9.3 9.4 9.3 24.5 0 33.9l-22.7 22.7c-9.4 9.4-24.6 9.4-33.9 0L34.5 273c-9.4-9.4-9.4-24.6 0-33.9z" /></svg></button>

      </div>
    );
  }

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
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
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
            <div className='h-[400px] w-[400px] lg:w-[850px] 2xl:w-[1250px] content-center '>
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