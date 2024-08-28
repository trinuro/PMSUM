import React from 'react';

const activities_obj = (props: any) => {
  const items = props.content

  return (
    <div className='md:flexCenter'>
      {items.map((each: {image_url: string; content: string; }[], index: number) => (
        <div key={index} className="bg-cover bg-center w-full max-h-96" style={{ backgroundImage: "url(" + each[0].image_url + ")" }}>
          <div className='h-[500px]'>
            <div className='w-full content-center'>
              <div className='text-center'>
              {index}
              </div>
              
            </div>
            <div className='font-extrabold text-white text-center text-xl sm:max-w-xs sm:mx-14 sm:text-3xl lg:text-5xl sm:text-left'>
              {/* {each[0].content} */}
            </div>
            {/* <div className='bg-black absolute bottom-0 top-0 left-0 right-0 transition-opacity bg-opacity-50 opacity-0 hover:opacity-100'>
                <div className='content-center w-full'>

                </div>
              </div> */}
          </div>

        </div>

      )
      )}
    </div>

  )
}

export default activities_obj