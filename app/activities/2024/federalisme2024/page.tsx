import React from 'react';
import Banner from '@/components/activities/activities_banner';
import Cover from '@/components/activities/activities_cover'
import Gallery from '@/components/activities/activities_galley';
import Highlight from '@/components/activities/activities_highlight';
import Objective from '@/components/activities/activities_objective';
import SocialMedia from '@/components/activities/activities_socialMedia';
import Title from '@/components/activities/activities_title';
import Youtube from '@/components/activities/activities_youtube';
import { act3 } from '@/components/activities/info/activities_info';
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
        <Title title={act3.title} date={act3.date} description={act3.description} />
      </div>
      {/* <div>
        <Objective content={act3.objective} />
      </div>
      <div>
        <Highlight content={act3.highlight} />
      </div>
      <div>
        <Gallery gallery={act3.gallery} caption={act3.gallery_caption} link={act3.gallery_link} download_name={act3.gallery_download_name} />
      </div>
      <div>
        <SocialMedia />
      </div> */}
    </main>
  );
}

