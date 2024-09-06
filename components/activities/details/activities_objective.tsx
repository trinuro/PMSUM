import React from 'react';

const activities_obj = (props: any) => {
  const items = props.content

  if (props.content == null)
    return <></>
  else
    return (
      <div className='bg-yellow-dark bg-opacity-40 flexCenter py-6'>
        <div className='w-[400px] md:w-[750px] lg:w-[1440px] flex flex-wrap xl:flex-nowrap px-10 md:px-20'>
          {items.map((each: { image_url: string; content: string; }[], index: number) => (
            <div key={index} className="bg-yellow-dark w-full lg:w-[320px] h-[200px] lg:h-[180px] content-center m-6 mx-auto rounded-md transition hover:scale-110" >
              <div className='item-center text-center p-4 '>
                {each[0].content}
              </div>
            </div>
          )
          )}
        </div>
      </div>
    )
}

export default activities_obj