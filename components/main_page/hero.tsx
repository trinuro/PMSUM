const Hero = () =>{
    return (<section className="bg-hero-bg h-screen relative -mt-[80px]">
        {dayak_strip('h-20 lg:h-32 top-0 opacity-40')}
        <section className="flex max-container padding-container justify-between pt-[20vh]">
            <div className="font-extrabold z-20 [text-shadow:_0_5px_2px_rgb(0_0_0_/_40%)]">
                <p className="text-white italic text-[12px] md:text-[23px] lg:text-[38px]">AN ASSOCIATION OF SARAWAKIANS</p>
                <h1 className="text-yellow-dark text-[32px] leading-[120%] md:text-[70px] lg:text-[90px] xl:text-[114px]">BY SARAWAKIANS</h1>
                <h1 className="text-red-dark text-[30px] leading-[120%] md:text-[66px] lg:text-[85px] xl:text-[107px]">FOR SARAWAKIANS</h1>
                <p className="text-white italic text-[12px] md:text-[23px] lg:text-[38px] text-right">IN UNIVERSITI MALAYA</p>
            </div>
        </section>
        <section className="bg-dtc-dun md:bg-dtc-bcm-dun bg-fixed bg-no-repeat bg-cover absolute w-full h-full bg-top md:bg-center bottom-0"
            style={{
                backgroundClip:'content-box'
            }}
        ></section>
        <div className="absolute w-full h-48 lg:h-64 bg-gradient-to-t from-black from-20% to-transparent bottom-0"></div>
        {dayak_strip('h-20 lg:h-32 bottom-0')}
    </section>)
}

const dayak_strip = (position : string) =>{
    return (
        <section className={`absolute bg-dayak-motif w-full bg-center ${position}`} 
        style={{
            backgroundRepeat: 'repeat-x', // Repeats the pattern horizontally
            backgroundSize: 'auto 100%', // Scales the pattern to fit the height of the header
          }}
        ></section>
    )
}

export default Hero;