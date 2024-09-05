"use client";
import Image from "next/image";

const SpeechYDP = () => {
    return (
        <div className="w-full h-3/4 p-4">
            {/* Wrapper for medium screens and up */}
            <div className="md:flex md:flex-col md:items-center">
                {/* Heading Section */}
                <div className="text-center my-4 md:mb-8">
                    <h1 className="my-element uppercase font-[700] leading-[120%] text-4xl md:text-5xl">
                        Who We Are
                    </h1>
                </div>

                {/* Image and Paragraph Section */}
                <div className="md:flex md:items-center md:justify-center w-full">
                    {/* Image Section */}
                    <div className="md:w-1/3 flex justify-center md:justify-end mb-8 md:mb-0">
                        <Image 
                            src="/image/team/speech_YDP.png" 
                            alt="Who We Are" 
                            width={250} 
                            height={250} 
                            className="object-contain md:w-[300px] lg:w-[400px] 2xl:w-[600px]"
                        />
                    </div>

                    {/* Paragraph Section */}
                    <div className="md:w-2/3 mx-8 my-2 md:ml-4">
                        <p className="text-base lg:text-lg 2xl:text-2xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et rem esse hic asperiores, facere nesciunt. Ab doloremque eum molestiae quod optio sit, tenetur necessitatibus ullam soluta non nisi accusamus qui exercitationem voluptatum. Aliquam fugit nihil libero numquam enim nulla debitis beatae ad, eveniet hic earum non deserunt facere animi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpeechYDP;