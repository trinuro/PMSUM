import Image from "next/image"

const MT = () => {
    return (
        <div className="w-full">
            <div className="bg-black py-8 md:py-10 lg:py-12">
                <h1 className="bold-40 md:bold-52 text-center text-white mx-8">High Committee</h1>
            </div>
            <div className="relative flexCenter mx-4 mt-6 pt-[10vh]">
                <div className="flexCenter">
                    <Image 
                        src="/image/team/Majlis_Tertinggi.png" 
                        alt="High Committee" 
                        width={800} 
                        height={800}
                        className="md:w-[400px] lg:w-[500px] xl:w-[900px] bg-bunga-terung bg-contain bg-no-repeat bg-center bg-opacity-50"
                    />
                </div>
            </div>
            <div className="flexCenter">
                <div className="w-2 md:w-4 h-[25vw] md:h-[15vw] flexCenter bg-[#ce1126]/50"></div>
            </div>
        </div>
    )
}

export default MT;