import React from 'react';
import { committee } from "@/components/acknowledgements/constant"
import Bio from '@/components/acknowledgements/bio'

export default function Acknowledgements() {
  return (
    <main>
      <div>
        <div className='title_bar font-semibold text-xl justify-center flex'>
          <div className='content-center max-w-7xl w-full pl-8'>
            <div>PROJECT DIRECTOR</div>
            <div></div>
          </div>
        </div>
        <div className='justify-center flex'>
          <div className='max-w-7xl w-full p-14'>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='title_bar font-semibold text-xl justify-center flex'>
          <div className='content-center max-w-7xl w-full pl-8'>
            <div>PROJECT COMMITTEE</div>
            <div></div>
          </div>
        </div>
        <div className='justify-center flex'>
          <div className='max-w-7xl w-full p-6'>
            <div className='flexCenter flex-wrap'>
              {committee.committee_list.map((each, index) => (
                <div key={index} >
                  <div className='m-4 h-[350px] content-center flexCenter'>
                    <div>
                      <Bio content={each} />
                    </div>
                  </div>
                </div>
              )
              )}
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
        <div className='justify-center flex'>
          <div className='max-w-7xl w-full p-14'>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
        <div className='mb-14 md:flex md:justify-center'>
          <div className='flex justify-center'>
            <img className='ack_logo m-5 md:m-2.5' src="/image/logo/ack1.png" />
          </div>
          <div className='flex justify-center'>
            <img className='ack_logo m-5 md:m-2.5' src="/image/logo/ack2.png" />
          </div>
        </div>
      </div>
    </main>
  );
}