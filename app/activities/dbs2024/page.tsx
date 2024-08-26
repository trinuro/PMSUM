import React from 'react';
import Banner from '../../../components/activities/activities_banner';
import Gallery from '../../../components/activities/activities_galley';
import Title from '../../../components/activities/activities_title';
import Objective from '../../../components/activities/activities_obj';
import Youtube from '../../../components/activities/activities_youtube';
import SocialMedia from '../../../components/activities/activities_socialMedia';
import { act1 } from '../../../components/activities/activities_info';
import { Sofadi_One } from 'next/font/google';

export default function Activities() {
  return (
    <main>
      <div>
        <Banner src={act1.banner_image_source} title={act1.title} subtitle={act1.subtitle} />
      </div>
      <div>
        <Title title={act1.title} date={act1.date} description={act1.description} />
      </div>
      <div>
        <Objective obj={act1.objective}/>
      </div>
      <div>
        <Youtube id={act1.youtube_id} ack={act1.youtube_acknowledgement}/>
      </div>
      <div>
        <Gallery gallery={act1.gallery} caption={act1.gallery_caption} link={act1.gallery_link}/>
      </div>
      <div>
        <SocialMedia />
      </div>
    </main>
  );
}

