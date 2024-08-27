import Image from "next/image";
import { dayak_strip } from "./objective";
import { ACTIVITY_HIGHLIGHTS } from "@/constants";
import Link from "next/link"

const background_colour = '[#FCEDDE]';

const Highlights = () =>{
    return (
        <section className="relative">
            <div className={`absolute w-full h-full top-0 bg-${background_colour} -z-10`}></div>
            <div className="padding-container max-container relative">
                <h2 className="font-extrabold text-[36px] text-center py-8">ACTIVITY HIGHLIGHTS</h2>
                <section className="lg:px-[40px] flex flex-col pb-8 lg:flex-row items-center gap-10">
                    {
                        ACTIVITY_HIGHLIGHTS.map((highlight, index)=>activity_card(index, highlight, background_colour))
                    }
                </section>
                <div className="flexCenter">
                    <Link href="/activities" className="py-4 px-10 bg-slate-300 mb-10 rounded-xl font-extrabold">MORE ACTIVITIES</Link>
                </div>
                {dayak_strip('left-0')}
                {dayak_strip('right-0')}
            </div>
        </section>
    )
}

interface HighlightProp{
    icon : string,
    icon_alt_name : string,
    name : string,
    highlighted_picture : string,
    date : string,
    main_page_link : string,
}

export const activity_card = (index:Number, {icon, icon_alt_name, name, highlighted_picture, date, main_page_link}:HighlightProp, bg_color:string='transparent') =>{
    return (
        <section key={`highlighted-activity-${index}`} className={`border-red-dark border-2 bg-${bg_color} border-solid px-4 py-5 rounded-lg max-w-[400px] relative`}>
            <div className="flex flex-row items-center justify-center pb-5">
                <Image src={icon} alt={icon_alt_name} height={75} width={75}></Image>
                <p className="font-extrabold text-[20px] uppercase">{name}</p>
            </div>
            <Image src={highlighted_picture} alt="Highlighted picture" height={1024} width={900} className="w-full h-auto"></Image>
            <p className="pt-5 text-center">Organised on {date}</p>
            <div className="flex justify-end"><Link href={main_page_link} className="font-extrabold text-[48px] w-full text-right">→</Link></div>
        </section>
    )
}

export default Highlights;