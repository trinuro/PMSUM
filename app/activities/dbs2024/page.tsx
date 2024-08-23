import React from 'react';
import Banner from '../../../components/activities/activities_banner';
import Title from '../../../components/activities/activities_title';
import Objective from '../../../components/activities/activities_obj';
import Youtube from '../../../components/activities/activities_youtube';
import { act1 } from '../../../components/activities/activities_info';

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
        <Objective title={act1.title} date={act1.date} description={act1.description} />
      </div>
      <div>
        <Youtube id={act1.youtube_id} ack={act1.youtube_acknowledgement}/>
      </div>
    </main>
  );
}
