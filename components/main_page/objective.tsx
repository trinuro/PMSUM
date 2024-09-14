import {OBJECTIVES, OBJECTIVES_TEXT} from '@/constants';

const Objective = () =>{
    return (<section className='relative'>
        <div className='bg-river-in-sarawak w-full h-full absolute top-0 -z-20 opacity-20 bg-no-repeat bg-top bg-cover'></div>
        <div className='max-container padding-container relative py-10'>
            <h2 className="font-extrabold text-[36px] flexCenter">OBJECTIVES</h2>
            <div className='flexCenter'>
                <p className='text-center text-gray-text pb-5 max-w-[800px] text-[24px] lg:text-[32px] bg-white/20 md:bg-inherit'>{OBJECTIVES_TEXT}</p>
            </div>
            <div className='flex flex-col md:flex-row justify-center gap-5 items-center lg:px-40 flex-wrap'>
                {OBJECTIVES.map(({title, elaboration})=>objective_card(title,elaboration))}
            </div>
            {dayak_strip('left-0')}
            {dayak_strip('right-0')}
        </div>
        
    </section>)
}

export const dayak_strip = (position:string) =>{
    return(
        <div className={'absolute bg-dayak-motif-2 h-full w-28 top-0 bg-center -z-10 opacity-40 bg-repeat-y '+position}></div>
    )
}

// code to create each objective card
const objective_card = (index:String, content:String) =>{
    return (
        <section key={`objective-${index}`} className='bg-yellow-dark max-w-[350px] min-h-[250px] rounded-md  lg:rounded-2xl text-center'>
            <div className='py-2 relative'>
                <div 
                className='bg-dayak-motif w-full h-full bg-center opacity-10 z-10 absolute top-0 left-0 rounded-t-md lg:rounded-t-2xl'
                style={{
                    backgroundSize: 'auto 100%', 
                }}
                >

                </div>
                <p className='text-red-dark bold-20 min-h-[75px] flex flex-col justify-center'>{index}</p>
            </div>
            <p className='flexCenter text-center px-5 py-3 text-gray-text'>{content}</p>
        </section>
    )
}

export default Objective;