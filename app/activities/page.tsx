'use client'
import React from 'react';
import Slideshow from "@/components/activities/main/activities_slideshow";
import { activity_card } from '@/components/activities/container/activities_container';
import { highlight_list } from '@/components/info/activities/info_main';
import Slider from "react-slick"; //npm install react-slick --save && npm install @types/react-slick --save
import "slick-carousel/slick/slick.css"; // npm install slick-carousel
import "slick-carousel/slick/slick-theme.css";

const Highlight = ({ title, list }: any) => {
  if (list.length == 0)
    return <></>
  else
    return (
      <div className='mb-4'>
        <div className='font-semibold text-xl sm:text-3xl'>{title}</div>
        <div className='flex justify-center flex-wrap'>
          {list.map((each: any, index: number) => activity_card(each, index))}
        </div>
      </div>
    )
}

export default function Activities() {
  const act = require('@/components/info/activities/info_activity')

  var act_list: any = []
  var index = 1;
  do {
    var act_code = 'act' + index
    act_list.push(act_code)
    index++
  } while (act['act' + index])
  act_list.reverse()

  return (
    <main>
      <Slideshow slide={act_list} />
      <div className='flex justify-center'>
        <div className='w-full max-w-7xl p-8'>
          <Highlight title={'Highlights'} list={highlight_list} />
          <Highlight title={'All activities'} list={act_list} />
          <div className='text-center text-sm sm:text-base m-4'>
            Last updated: {act.last_updated}
          </div>
        </div>
      </div>
    </main>
  );
}

