"use client"
import Image from 'next/image';
import { BioAutographyList } from '@/constants'
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { IconContext } from "react-icons";
import PopUpBioAutography from './PopUpBioAutography';
import { useState } from 'react';

const BioAutography = () => {
    const [selectedItem, setSelectedItem] = useState(null);
  
    const openModal = (item) => {
      setSelectedItem(item);
    };
  
    const closeModal = () => {
      setSelectedItem(null);
    };
    
    return (
      <div>
        <div className="grid gap-8 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mx-6 md:mx-8 lg:mx-10 my-6 md:my-8 lg:my-10">
          {BioAutographyList.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 p-2">
            <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full cursor-pointer"
                src={item.imgSrc}
                alt={item.position}
                width={300}
                height={300}
                onClick={() => openModal(item)}
            />
            <h3 onClick={() => openModal(item)}
                className="flexCenter text-2xl font-bold text-gray-900 dark:text-white min-h-16 md:min-h-24 lg:min-h-16 text-center mx-12 md:mx-10 lg:mx-8 xl:mx-12 cursor-pointer">
                {item.name}
            </h3>
                
              <p className="text-center my-4">{item.position}</p>
              <ul className="flex justify-center items-center space-x-4 min-h-6">
                {item.instagram && (
                  <li>
                      <a href={item.instagram}>
                          <IconContext.Provider value={{ color: "#ce1126", className: "contactIcon" }}>
                              <IoLogoInstagram />
                          </IconContext.Provider>
                      </a>
                  </li>
                )}
                {item.twitter && (
                    <li>
                        <a href={item.twitter}>
                            <IconContext.Provider value={{ color: "#ce1126", className: "contactIcon" }}>
                                <FaXTwitter />
                            </IconContext.Provider>
                        </a>
                    </li>
                )}
                {item.linkedin && (
                    <li>
                        <a href={item.linkedin}>
                            <IconContext.Provider value={{ color: "#ce1126", className: "contactIcon" }}>
                                <IoLogoLinkedin />
                            </IconContext.Provider>
                        </a>
                    </li>
                )}
              </ul>
            </div>
          ))}
        </div>
  
        {selectedItem && (
          <PopUpBioAutography selectedItem={selectedItem} onClose={closeModal} />
        )}
      </div>
    );
  };
  
  export default BioAutography;