import React from 'react';
import Banner from '../../../components/activities/activities_banner';
import Gallery from '../../../components/activities/activities_galley';
import Highlight from '../../../components/activities/activities_highlight';
import Objective from '../../../components/activities/activities_obj';
import SocialMedia from '../../../components/activities/activities_socialMedia';
import Title from '../../../components/activities/activities_title';
import Youtube from '../../../components/activities/activities_youtube';
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
        <Objective content={act1.objective}/>
      </div>
      <div>
        <Youtube id={act1.youtube_id} ack={act1.youtube_acknowledgement}/>
      </div>
      <div>
        <Highlight content={act1.highlight}/>
      </div>
      <div>
        <Gallery gallery={act1.gallery} caption={act1.gallery_caption} link={act1.gallery_link} download_name={act1.gallery_download_name}/>
      </div>
      <div>
        <SocialMedia />
      </div>
    </main>
  );
}

