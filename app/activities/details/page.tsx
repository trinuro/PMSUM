"use client"

import React from 'react';
import Banner from '@/components/activities/activities_banner';
import Committee from '@/components/activities/activities_committee';
import Cover from '@/components/activities/activities_cover'
import Gallery from '@/components/activities/activities_galley';
import Highlight from '@/components/activities/activities_highlight';
import Infographic from '@/components/activities/activities_infographic_canva';
import Message from '@/components/activities/activities_message';
import Objective from '@/components/activities/activities_objective';
import SocialMedia from '@/components/activities/activities_socialMedia';
import Title from '@/components/activities/activities_title';
import Youtube from '@/components/activities/activities_youtube';
import { Sofadi_One } from 'next/font/google';

import { useSearchParams } from 'next/navigation';

export default function Activities() {
const act_code:any = useSearchParams().get('code')

const act = require('@/components/info/activities/info_activity')

  return (
    <main>
      <div>
        <Cover code={act_code} title={act[act_code].title} date={act[act_code].date} location={act[act_code].location} video_src={act[act_code].video_src} video_url={act[act_code].video_url} />
      </div>
      <div id='banner'>
        <Message message={act[act_code].message} />
        <Banner code={act_code} src={act[act_code].banner_image_source} title={act[act_code].title} subtitle={act[act_code].subtitle} />
      </div>
      <div>
        <Title code={act_code} title={act[act_code].title} date={act[act_code].date} description={act[act_code].description} icon={act[act_code].icon}/>
      </div>
      <div>
        <Objective content={act[act_code].objective} />
      </div>
      <div>
        <Infographic info={act[act_code].infographic}/>
      </div>
      <div>
        <Youtube id={act[act_code].youtube_id} ack={act[act_code].youtube_acknowledgement} />
      </div>
      <div>
        <Highlight content={act[act_code].highlight} />
      </div>
      <div>
        <Gallery gallery={act[act_code].gallery} caption={act[act_code].gallery_caption} link={act[act_code].gallery_link} download_name={act[act_code].gallery_download_name} />
      </div>
      <div>
        <Committee list={act[act_code].committee_list} image={act[act_code].committee_image} />
      </div>
      <div>
        <SocialMedia />
      </div>
    </main>
  );
}

