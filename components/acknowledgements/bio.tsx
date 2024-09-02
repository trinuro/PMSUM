"use client"
import Image from 'next/image';
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IconContext } from "react-icons";

const SocialMedia = (props: any) => {
    if (props.socialMedia == "") {
        return <></>
    }
    else {
        return (
            <li>
                <a href={props.socialMedia} target='_blank'>
                    {props.icon}
                </a>
            </li>
        )
    }
}

const Facebook =
    (
        <IconContext.Provider value={{ color: "#ce1126", className: "contactIcon" }}>
            <FaFacebookSquare />
        </IconContext.Provider>
    )

const Instagram =
    (
        <IconContext.Provider value={{ color: "#ce1126", className: "contactIcon" }}>
            <IoLogoInstagram />
        </IconContext.Provider>
    )

const Twitter =
    (
        <IconContext.Provider value={{ color: "#ce1126", className: "contactIcon" }}>
            <FaXTwitter />
        </IconContext.Provider>
    )

const LinkedIn =
    (
        <IconContext.Provider value={{ color: "#ce1126", className: "contactIcon" }}>
            <IoLogoLinkedin />
        </IconContext.Provider>
    )

const Bio = (props: any) => {
    return (
        <div>
            <div className="grid gap-8 lg:gap-8  mx-6 md:mx-8 lg:mx-10 my-6 md:my-8 lg:my-10">
                <div
                    key={props.content.id}
                    className="flex flex-col items-center justify-center text-gray-500 p-2">
                    <Image
                        className="mx-auto mb-4 w-36 h-36 rounded-full"
                        src={props.imgSrc}
                        alt={props.content.position}
                        width={300}
                        height={300}
                    />
                    <h3 className="w-full mt-2 text-2xl font-bold text-gray-900 min-h-16 text-center mx-12 md:mx-10 lg:mx-8 xl:mx-12">
                        {props.content.name}
                    </h3>
                    <p className="text-center my-4">{props.content.position}</p>
                    <ul className="flex justify-center items-center space-x-4 min-h-6">
                        <SocialMedia socialMedia={props.content.facebook} icon={Facebook}></SocialMedia>
                        <SocialMedia socialMedia={props.content.instagram} icon={Instagram}></SocialMedia>
                        <SocialMedia socialMedia={props.content.twitter} icon={Twitter}></SocialMedia>
                        <SocialMedia socialMedia={props.content.linkedin} icon={LinkedIn}></SocialMedia>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Bio;