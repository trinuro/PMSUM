import React from 'react';
import Slideshow from "../../components/activities/slideshow_activities";

export default function Activities() {
  return (
    <main>
      <Slideshow />
      <div className='flex justify-center'>
        <div className='w-full max-w-7xl p-8'>
          <div className='font-semibold text-xl sm:text-3xl'>All activities</div>
          <div className='text-center text-sm sm:text-base mt-4'>No activities to show</div>
        </div>
      </div>
      <div>
        
      </div>
    </main>
  );
}

