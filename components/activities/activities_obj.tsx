import React from 'react';

const activities_obj = (props: any) => {
  const items = props.obj

  return (
    <div className='md:flexCenter'>
      {items.map((each: string[], index: number) => (
        <div key={index} className="bg-cover bg-center w-full  max-h-96" style={{ backgroundImage: "url(" + each[0] + ")" }}>
          <div className='h-[420px]'>
            <div className='font-extrabold text-white text-center text-xl sm:max-w-xs sm:mx-14 sm:text-3xl lg:text-5xl sm:text-left'>
              {each[1]}
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