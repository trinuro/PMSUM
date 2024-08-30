import React from 'react';
import Banner from '@/components/activities/activities_banner';
import Cover from '@/components/activities/activities_cover'
import Gallery from '@/components/activities/activities_galley';
import Highlight from '@/components/activities/activities_highlight';
import Objective from '@/components/activities/activities_objective';
import SocialMedia from '@/components/activities/activities_socialMedia';
import Title from '@/components/activities/activities_title';
import Youtube from '@/components/activities/activities_youtube';
import { act2 } from '@/components/activities/info/activities_info';
import { Sofadi_One } from 'next/font/google';

export default function Activities() {
  return (
    <main>
      <div>
        <Cover title={act2.title} date={act2.date} location={act2.location} video_src={act2.video_src}  video_url={act2.video_url}/>
      </div>
      <div id='banner'>
        <Banner src={act2.banner_image_source} title={act2.title} subtitle={act2.subtitle} />
      </div>
      <div>
        <Title title={act2.title} date={act2.date} description={act2.description} />
      </div>
      <div>
        <Objective content={act2.objective} />
      </div>
      <div>
        <Highlight content={act2.highlight} />
      </div>
      <div>
        <Gallery gallery={act2.gallery} caption={act2.gallery_caption} link={act2.gallery_link} download_name={act2.gallery_download_name} />
      </div>
      <div>
        <SocialMedia />
      </div>
    </main>
  );
}

