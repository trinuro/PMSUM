"use client"
import React, { Suspense } from 'react';
import Banner from '@/components/activities/details/activities_banner';
import Committee from '@/components/activities/details/activities_committee';
import Cover from '@/components/activities/details/activities_cover'
import Gallery from '@/components/activities/details/activities_galley';
import Highlight from '@/components/activities/details/activities_highlight';
import Infographic from '@/components/activities/details/activities_infographic_canva';
import Message from '@/components/activities/details/activities_message';
import Objective from '@/components/activities/details/activities_objective';
import SocialMedia from '@/components/activities/details/activities_socialMedia';
import Title from '@/components/activities/details/activities_title';
import Youtube from '@/components/activities/details/activities_youtube';

import { useSearchParams } from 'next/navigation';

export default function Activities() {
  return (
    <main>
      <Suspense><Act /></Suspense>
    </main>
  );
}

const Act = () => {
  const act = require('@/components/info/activities/info_activity')
  var act_code = useSearchParams().get('code')
  if (act_code == null) {
    return <></>
  }
  else
    return (
      <div>
        <div>
          <Cover code={act_code} title={act[act_code].title} date={act[act_code].date} location={act[act_code].location} video_url={act[act_code].video_url} />
        </div>
        <div id='banner'>
          <Message message={act[act_code].message} />
          <Banner code={act_code} src={act[act_code].banner_image_source} title={act[act_code].title} subtitle={act[act_code].subtitle} />
          <Title code={act_code} title={act[act_code].title} date={act[act_code].date} description={act[act_code].description} icon={act[act_code].icon} />
          <Objective content={act[act_code].objective} />
          <Infographic info={act[act_code].infographic} />
          <Youtube id={act[act_code].youtube_id} ack={act[act_code].youtube_acknowledgement} />
          <Highlight content={act[act_code].highlight} />
          <Gallery gallery={act[act_code].gallery} caption={act[act_code].gallery_caption} link={act[act_code].gallery_link} download_name={act[act_code].gallery_download_name} />
          <Committee code={act_code} list={act[act_code].committee_list} image={act[act_code].committee_image} />
          <SocialMedia code={act_code} insta={act[act_code].instagram_id} bg_image={act[act_code].instagram_bg_image} />
        </div>
      </div>

    )
}

