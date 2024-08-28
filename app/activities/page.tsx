import React from 'react';
import Slideshow from "@/components/activities/slideshow_activities";
import { activity_list } from '@/components/activities/activities_info';

export default function Activities() {
  return (
    <main>
      <Slideshow />
      <div className='flex justify-center'>
        <div className='w-full max-w-7xl p-8'>
          <div className='font-semibold text-xl sm:text-3xl'>All activities</div>
          <div className='p-10 flex'>
            {activity_list.list.map((each, index) => (
              <div key={index} className='w-fit mx-5 '>
                <a href={each[0].page_url} >
                  <button className='p-5 border-solid border-yellow-dark border-2 rounded-xl'>
                    {each[0].title}
                  </button>
                </a>
              </div>
            )
            )}
          </div>
          <div className='text-center text-sm sm:text-base mt-4 '>
            Last updated: {activity_list.date}
          </div>
        </div>
      </div>
      <div>
      </div>
    </main>
  );
}

