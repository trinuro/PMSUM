import Image from "next/image"

const MT = () => {
    return (
        <div className="max-container">
            <div className="bg-black py-8 md:py-10 lg:py-12">
                <h1 className="bold-40 md:bold-52 text-center text-white mx-8">High Committee</h1>
            </div>
            <div className="mx-4 mt-6 pt-[10vh]">
                <div className="flexCenter">
                    <Image 
                        src="/image/team/Majlis_Tertinggi.png" 
                        alt="High Committee" 
                        width={800} 
                        height={800}
                        className="flexCenter md:w-[400px] lg:w-[500px] bg-bunga-terung bg-contain bg-no-repeat bg-center bg-opacity-50"
                    />
                </div>
            </div>
            <div className="flexCenter">
                <div className="w-2 md:w-4 h-[30vw] md:h-[20vw] flexCenter bg-[#ce1126]/50"></div>
            </div>
        </div>
    )
}

export default MT;