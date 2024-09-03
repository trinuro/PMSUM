import React from 'react';

const containerStyle: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  height: 0,
  paddingTop: '100.0000%',
  paddingBottom: 0,
  boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
  marginTop: '1.6em',
  marginBottom: '0.9em',
  overflow: 'hidden',
  borderRadius: '8px',
  willChange: 'transform',
};

const iframeStyle: React.CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  border: 'none',
  padding: 0,
  margin: 0,
};

const Canva = ({ canva_id }: any) => (
  <div>
    <div style={containerStyle}>
      <iframe style={iframeStyle} src={"https://www.canva.com/design/" + canva_id + "/view?embed"} allowFullScreen={true}></iframe>
    </div>
  </div>

);

const Register = ({url}: any) => {
  if (url == "")
    return <></>
  else
    return (
      <div className='flex justify-center lg:justify-normal'>
        <div className='mt-3'><a className='' href={url} target='_blank'><button className='p-4 bg-yellow-dark rounded-md transition hover:scale-110 active:scale-105'>Register</button></a></div>
      </div>
    )
}

const style = [
  "",
  "flex-row-reverse",
]

const activities_infographic_canva = (props: any) => {
  return (
    <div className='max-container flex content-center px-10 pt-10 pb-6'>
      <div className='w-full'>
        <div>
          <div className='font-bold text-3xl'>{props.title}</div>
        </div>
        {props.content.map((each: any, index: number) => (
          <div key={index} className={`mb-10 lg:flex justify-evenly ${style[index % 2]}`}>
            <div className='px-10 pt-10 pb-6 w-full lg:w-[600px]'>
              {each.content.map((each: string, index: number) => (
                <div key={index}>
                  <div className='w-full mb-4' >
                    {each}
                  </div>
                </div>
              ))}
              <Register url={each.form_url} />
            </div>
            <div className='mx-auto w-full lg:mx-0 max-w-[500px]'>
              <Canva canva_id={each.canva_id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default activities_infographic_canva