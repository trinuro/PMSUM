import React from 'react';
import Bio from '@/components/acknowledgements/bio'
import { director } from "@/components/info/acknowledgements/info"
import { project_committee } from "@/components/info/acknowledgements/info"
import { acknowledgement } from "@/components/info/acknowledgements/info"

export default function Acknowledgements() {
  return (
    <main>
      <div>
        <div className='title_bar font-semibold text-xl justify-center flex'>
          <div className='content-center max-w-7xl w-full pl-8'>
            <div>PROJECT DIRECTOR</div>
          </div>
        </div>
        <div className='justify-center flex bg-cover bg-center bg-[url(/image/acknowledgements/img_ack_7.png)]'>
          <div className='max-w-7xl w-full px-14 pt-14 pb-10'>
            {director.content.map((each, index) => (
              <div key={index} className='mb-4'>
                {each}
              </div>
            ))}
            <div className='text-right mt-8'>
              -- {director.author}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='title_bar font-semibold text-xl justify-center flex'>
          <div className='content-center max-w-7xl w-full pl-8'>
            <div>PROJECT COMMITTEE</div>
          </div>
        </div>
        <div className='justify-center flex bg-cover bg-center bg-[url(/image/acknowledgements/img_ack_6.png)]'>
          <div className='max-w-7xl w-full p-6 '>
            <div className='flexCenter flex-wrap'>
              {project_committee.committee_list.map((each, index) => (
                <div key={index} >
                  <div className='m-4 h-[350px] w-[350px] content-center flexCenter'>
                    <div>
                      <Bio content={each} imgSrc={"/image/acknowledgements/" + each.imgSrc} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='bg-yellow-dark h-[60px] font-semibold text-xl justify-center flex'>
          <div className='content-center max-w-7xl w-full pl-8'>
            <div>ACKNOWLEDGEMENTS</div>
          </div>
        </div>
        <div className='bg-cover bg-center bg-[url(/image/acknowledgements/img_ack_8.png)]'>
          <div className='justify-center flex '>
            <div className='max-w-7xl w-full px-14 pt-14 pb-10'>
              {acknowledgement.content.map((each, index) => (
                <div key={index} className='mb-4'>
                  {each}
                </div>
              ))}
            </div>
          </div>
          <div className='pb-14 md:flex md:justify-center'>
            {acknowledgement.logo.map((each, index) => (
              <div key={index} className='flex justify-center'>
                <img className='ack_logo m-5 md:m-2.5' src={"/image/logo/" + each} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}