import React from 'react';

function closeOverlay() {
  let object = document.getElementById('overlay')
  if(object != null){
    object.style.opacity = "0";
    object.addEventListener('transitionend', function () {
      document.getElementById('overlay')?.remove();
    });
  }
  
}

const activities_banner = ({ act_code }: any) => {
  const act = require('@/components/info/activities/info_activity')
  if (act[act_code].message == null) {
    return <></>
  }
  else
    return (
      <div id="overlay" className='z-10 fixed top-0 bottom-0 left-0 right-0  h-full w-full bg-white bg-opacity-90 p-8 content-center overflow-auto transition'>
        <div className='min-w-[250px] bg-white max-container rounded-md'>
          <div className='max-container mt-14 mb-12 pt-4 rounded-md bg-[#e04454] border-4 border-solid border-[#e04454] '>
            <div className='px-4 pb-4 flex justify-between '>
              <div>Annoucement</div>
              <div>
                <button className='w-[20px] h-[20px] opacity-40 hover:opacity-80' onClick={() => closeOverlay()}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#cf1126" d="M345 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L73 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L39 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L311 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L345 137z" /></svg></button>
              </div>
            </div>
            <div className='bg-white'>
              <div className='bg-red-dark bg-opacity-40'>
                <div className='pt-10 pb-6 px-10 md:px-20 w-full max-container '>
                  {act[act_code].message.map((each: any, index: number) => (
                    <div key={index} className='mb-4'>
                      {each}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default activities_banner