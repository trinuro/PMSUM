"use client"
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Banner from '@/components/activities/details/activities_banner';
import Committee from '@/components/activities/details/activities_committee';
import Cover from '@/components/activities/details/activities_cover'
import Gallery from '@/components/activities/details/activities_galley';
import Highlight from '@/components/activities/details/activities_highlight';
import Infographic from '@/components/activities/details/activities_infographic_canva';
import Message from '@/components/activities/details/activities_message';
import NotFound from '@/components/activities/details/activities_not_found';
import Objective from '@/components/activities/details/activities_objective';
import SocialMedia from '@/components/activities/details/activities_socialMedia';
import Title from '@/components/activities/details/activities_title';
import Youtube from '@/components/activities/details/activities_youtube';

export default function Activities() {

  const Act = () => {
    const act = require('@/components/info/activities/info_activity')
    const act_code = useSearchParams().get('code')
    if (act_code == null || undefined || "" || act[act_code] == null) {
      return <NotFound />
    }
    else
      return (
        <div className='max-w-screen overflow-hidden'>
          <div>
            <Cover act_code={act_code} />
          </div>
          <div id='banner'>
            <Message act_code={act_code} />
            <Banner act_code={act_code} />
            <Title act_code={act_code} />
            <Objective act_code={act_code} />
            <Infographic act_code={act_code} />
            <Youtube act_code={act_code} />
            <Highlight act_code={act_code} />
            <Gallery act_code={act_code} />
            <Committee act_code={act_code} />
            <SocialMedia act_code={act_code} />
          </div>
        </div>
      )
  }

  return (
    <main>
      <Suspense><Act /></Suspense>
    </main>
  );
}



