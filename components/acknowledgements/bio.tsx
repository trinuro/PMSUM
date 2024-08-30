"use client"
import Image from 'next/image';
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { IconContext } from "react-icons";

const Bio = (props: any) => {

    return (
        <div>
            <div className="grid gap-8 lg:gap-8  mx-6 md:mx-8 lg:mx-10 my-6 md:my-8 lg:my-10">
                <div
                    key={props.content.id}
                    className="flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 p-2">
                    <Image
                        className="mx-auto mb-4 w-36 h-36 rounded-full cursor-pointer"
                        src={props.content.imgSrc}
                        alt={props.content.position}
                        width={300}
                        height={300}
                    />
                    <h3 className="flexCenter text-2xl font-bold text-gray-900 dark:text-white min-h-16 md:min-h-24 lg:min-h-16 text-center mx-12 md:mx-10 lg:mx-8 xl:mx-12 cursor-pointer">
                        {props.content.name}
                    </h3>

                    <p className="text-center my-4">{props.content.position}</p>
                    <ul className="flex justify-center items-center space-x-4 min-h-6">
                        <li>
                            <a href={props.content.instagram}>
                                <IconContext.Provider value={{ color: "#ce1126", className: "contactIcon" }}>
                                    <IoLogoInstagram />
                                </IconContext.Provider>
                            </a>
                        </li>
                        <li>
                            <a href={props.content.twitter}>
                                <IconContext.Provider value={{ color: "#ce1126", className: "contactIcon" }}>
                                    <FaXTwitter />
                                </IconContext.Provider>
                            </a>
                        </li>
                        <li>
                            <a href={props.content.linkedin}>
                                <IconContext.Provider value={{ color: "#ce1126", className: "contactIcon" }}>
                                    <IoLogoLinkedin />
                                </IconContext.Provider>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Bio;