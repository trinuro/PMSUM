import React from 'react';
import Banner from '@/components/activities/activities_banner';
import Cover from '@/components/activities/activities_cover'
import Gallery from '@/components/activities/activities_galley';
import Highlight from '@/components/activities/activities_highlight';
import Infographic from '@/components/activities/activities_infographic_canva';
import Objective from '@/components/activities/activities_objective';
import SocialMedia from '@/components/activities/activities_socialMedia';
import Title from '@/components/activities/activities_title';
import Youtube from '@/components/activities/activities_youtube';
import { act3 } from '@/components/info/activities/info_activity';
import { Sofadi_One } from 'next/font/google';

export default function Activities() {
  return (
    <main>
      <div>
        <Cover title={act3.title} date={act3.date} location={act3.location} video_src={act3.video_src}  video_url={act3.video_url}/>
      </div>
      <div id='banner'>
        <Banner src={act3.banner_image_source} title={act3.title} subtitle={act3.subtitle} />
      </div>
      <div>
        <Title title={act3.title} date={act3.date} description={act3.description} icon={act3.icon}/>
      </div>
      <div>
        <Infographic title={act3.infographic.title} content={act3.infographic.content}/>
      </div>
      <div>
        <SocialMedia />
      </div>
    </main>
  );
}

