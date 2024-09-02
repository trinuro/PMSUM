"use client";
import Image from 'next/image';
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { IconContext } from "react-icons";
import { IoClose } from "react-icons/io5";

const PopUpBioAutography = ({ selectedItem, onClose }) => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl w-[80vw] h-[80vh] max-w-screen-3xl overflow-y-auto md:overflow-hidden p-6">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
            <IconContext.Provider value={{ color: "#ce1126", className: "closeIcon" }}>
                <IoClose />
            </IconContext.Provider>
        </button>
        <div className="flex">
            <div className="md:flex md:flex-row item-center justify-center gap-4">
                <div className="flex-initial md:w-1/3 flex-col items-center px-4 py-12 justify-center">
                    <div className="flexCenter">
                        <Image
                            className="w-36 h-36 rounded-full mb-4"
                            src={selectedItem.imgSrc}
                            alt={selectedItem.position}
                            width={300}
                            height={300}
                        />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
                        {selectedItem.name}
                    </h3>
                    <p className="text-center text-gray-500 dark:text-gray-400 mb-4">
                        {selectedItem.position}
                    </p>
                    
                    <ul className="flex justify-center items-center space-x-4 mb-4">
                        {selectedItem.instagram && (
                            <li>
                                <a href={selectedItem.instagram}>
                                    <IconContext.Provider value={{ color: "#ce1126", className: "contactIcon" }}>
                                        <IoLogoInstagram />
                                    </IconContext.Provider>
                                </a>
                            </li>
                        )}
                        {selectedItem.twitter && (
                            <li>
                                <a href={selectedItem.twitter}>
                                    <IconContext.Provider value={{ color: "#ce1126", className: "contactIcon" }}>
                                        <FaXTwitter />
                                    </IconContext.Provider>
                                </a>
                            </li>
                        )}
                        {selectedItem.linkedin && (
                            <li>
                                <a href={selectedItem.linkedin}>
                                    <IconContext.Provider value={{ color: "#ce1126", className: "contactIcon" }}>
                                        <IoLogoLinkedin />
                                    </IconContext.Provider>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="flex-initial md:w-2/3 h-3/4 bg-slate-300 md:m-8 p-4 border-2 border-indigo-600 border-solid">
                    <div className="relative md:h-64 lg:h-72 md:overflow-y-auto">
                    <p className="text-start text-gray-500 dark:text-gray-400">
                        {selectedItem.autobiography}
                    </p>
                    </div>
                    
                </div>
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpBioAutography;