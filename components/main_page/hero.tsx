const Hero = () =>{
    return (<section className="bg-black h-screen relative">
        {dayak_strip('h-32 top-0 opacity-40')}
        <section className="flex max-container padding-container justify-between pt-36">
            <div></div>
            <div className="font-extrabold z-20">
                <p className="text-white italic text-[10px] md:text-[18px] lg:text-[25px]">AN ASSOCIATION OF SARAWAKIANS</p>
                <h1 className="text-yellow-dark text-[30px] leading-[120%] md:text-[53px] lg:text-[75px]">BY SARAWAKIANS</h1>
                <h1 className="text-red-dark text-[28px] leading-[120%] md:text-[50px] lg:text-[71px]">FOR SARAWAKIANS</h1>
                <p className="text-white italic text-[10px] md:text-[18px] lg:text-[25px] text-right">IN UNIVERSITI MALAYA</p>
            </div>
            <div></div>
        </section>
        <section className="bg-pls-delete bg-no-repeat absolute w-full h-full bg-center bottom-0"></section>
        <div className="absolute w-full h-48 lg:h-64 bg-gradient-to-t from-black from-20% to-transparent bottom-0"></div>
        {dayak_strip('h-20 lg:h-32 bottom-0')}
    </section>)
}

const dayak_strip = (position : string) =>{
    return (
        <section className={`absolute bg-dayak-motif w-full bg-center ${position}`}></section>
    )
}

export default Hero;