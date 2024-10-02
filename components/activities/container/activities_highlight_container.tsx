import React from 'react';
import { useState } from 'react';
import Card_flip from "react-card-flip"; // npm install react-card-flip

const activities_highlight_container = (props: any) => {
    const [isFlipped, setIsFlipped] = useState(false);

    function flipCard() {
        setIsFlipped(!isFlipped);
    }

    return (
        <div>
            <Card_flip flipDirection='horizontal' isFlipped={isFlipped}>
                <div onClick={flipCard}>
                    <div className='w-[350px] h-[400px] xl:w-[650px] xl:h-[350px] bg-yellow-dark rounded-3xl xl:flexCenter p-8 cursor-pointer'>
                        <div className='flexCenter mb-5 xl:mb-0 xl:w-[350px]'>
                            <div className='p-4 text-center font-bold text-3xl'>
                                {props.content.title}
                            </div>
                        </div>
                        <div className='flexCenter '>
                            <img className='w-[250px] rounded-2xl' src={props.content.image_url} />
                        </div>
                    </div>
                </div>
                <div onClick={flipCard}>
                    <div className='w-[350px] h-[400px] xl:w-[650px] xl:h-[350px] bg-yellow-dark rounded-3xl p-10 cursor-pointer'>
                        <div className='text-sm xl:text-lg text-gray-700 md:font-bold xl:font-medium'>
                            {props.content.subtitle}
                        </div>
                        <div className='text-sm xl:text-lg md:font-bold xl:font-medium mt-5'>
                            {props.content.content}
                        </div>
                    </div>
                </div>
            </Card_flip>
        </div>
    )
}

export default activities_highlight_container