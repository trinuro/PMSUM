// import Image from "next/image";

// const SpeechYDP = () => {
//     return (
//         <div className="w-full xl:h-screen">
            
//             <div className="flex flex-wrap md:flex-none">
//                 <div className="flex-1 flexCenter px-1 md:block">
//                     <h1 className="uppercase bold-28 md:bold-52 text-left md:text-center md:py-8 ml-4 md:m-2">Who We Are</h1>
//                 </div>
//                 <div className="flex-1 flexCenter md:flex-1">
//                     <Image src="/image/team/speech_YDP.png" alt="d" width={200} height={220}/>
//                 </div>
                
//             </div>
//             <div className="flexCenter md:flex-1 m-2 mt-8 p-4">
//                     <p className="regular-16 md:regular-18">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et rem esse hic asperiores, facere nesciunt. Ab doloremque eum molestiae quod optio sit, tenetur necessitatibus ullam soluta non nisi accusamus qui exercitationem voluptatum. Aliquam fugit nihil libero numquam enim nulla debitis beatae ad, eveniet hic earum non deserunt facere animi.</p>
//                 </div>
            
//         </div>
//     );
// }

// export default SpeechYDP;

import Image from "next/image";

const SpeechYDP = () => {
    return (
        <div className="w-full xl:h-screen p-4">
            {/* Wrapper for medium screens and up */}
            <div className="md:flex md:flex-col md:items-center">
                {/* Heading Section */}
                <div className="text-center md:mb-8">
                    <h1 className="uppercase bold-28 md:bold-52">Who We Are</h1>
                </div>

                {/* Image and Paragraph Section */}
                <div className="md:flex md:items-start md:justify-center w-full">
                    {/* Image Section */}
                    <div className="md:w-1/3 flex justify-center md:justify-end mb-4 md:mb-0">
                        <Image 
                            src="/image/team/speech_YDP.png" 
                            alt="Who We Are" 
                            width={200} 
                            height={200} 
                            className="object-contain md:w-[300px] xl:w-[400px]"
                            />
                    </div>

                    {/* Paragraph Section */}
                    <div className="md:w-2/3 md:ml-4">
                        <p className="text-base md:regular-18">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et rem esse hic asperiores, facere nesciunt. Ab doloremque eum molestiae quod optio sit, tenetur necessitatibus ullam soluta non nisi accusamus qui exercitationem voluptatum. Aliquam fugit nihil libero numquam enim nulla debitis beatae ad, eveniet hic earum non deserunt facere animi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpeechYDP;
