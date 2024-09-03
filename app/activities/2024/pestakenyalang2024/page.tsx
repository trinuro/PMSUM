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
import { act2 } from '@/components/activities/info/info_activity';
import { Sofadi_One } from 'next/font/google';

export default function Activities() {
  return (
    <main>
      <div>
        <Cover title={act2.title} date={act2.date} location={act2.location} video_src={act2.video_src}  video_url={act2.video_url}/>
      </div>
      <div id='banner'>
        <Message message={act2.message} />
      </div>
      <div>
        <Banner src={act2.banner_image_source} title={act2.title} subtitle={act2.subtitle} />
      </div>
      
      <div>
        <Title title={act2.title} date={act2.date} description={act2.description} />
      </div>
      <div>
        <Infographic title={act2.infographic.title} content={act2.infographic.content}/>
      </div>
      <div>
        <Committee list={act2.committee_list} image={act2.committee_image} />
      </div>
      <div>
        <SocialMedia />
      </div>
    </main>
  );
}

