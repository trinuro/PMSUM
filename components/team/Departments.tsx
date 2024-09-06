"use client";
import { departmentList } from "@/constants";
import Image from "next/image";
import { useEffect } from 'react';

const Departments = () => {

    useEffect(() => {
        const scrollContainer = document.querySelector('.scroll-container');

        let isScrolling = false;
        let scrollAmount = 0;

        const easeOutQuad = (t:any) => t * (2 - t);

        const smoothScroll = () => {
            isScrolling = true;
            scrollContainer!.scrollLeft += scrollAmount * easeOutQuad(0.1);
            scrollAmount *= 0.9; // Decay factor

            if (Math.abs(scrollAmount) > 0.5) {
                requestAnimationFrame(smoothScroll);
            } else {
                isScrolling = false;
            }
        };

        const handleScroll = (evt:any) => {
            evt.preventDefault();
            scrollAmount += evt.deltaY;
            if (!isScrolling) smoothScroll();
        };

        scrollContainer!.addEventListener('wheel', handleScroll);

        return () => scrollContainer!.removeEventListener('wheel', handleScroll);
    }, []);

    return (
        <div>
            <div className="scroll-container text-[#ce1126] w-screen overflow-x-scroll scrollbar-hide">
                <div className="flex w-max">
                    {departmentList.map((department) => (
                        <div
                            key={department.id}
                            className="flex flex-col items-center justify-around bg-[#fcedde] hover:bg-hover-pattern hover:bg-cover hover:bg-center transition-all duration-300 w-screen h-[60vh] md:w-[50vw] xl:w-[33vw] xl:h-[90vh]  transition hover:scale-105 ease-in-out duration-300"
                        >
                            {/* Image */}
                            {department.imgSrc && (
                                <div className="basis-2/3 flex-grow relative w-full">
                                    <Image 
                                        src={department.imgSrc} 
                                        alt={department.title} 
                                        fill 
                                        className="object-contain" 
                                    />
                                </div>
                            )}

                            {/* Text */}
                            <div className="basis-1/3 flex-grow flex-col flexCenter text-center gap-1">
                                <h1 className="bold-16 flexCenter text-center uppercase pt-2 lg:text-xl xl:text-2xl xl:min-h-[60px]">
                                    {department.title}
                                </h1>
                                <p className="flexCenter py-2 px-10 md:8 xl:px-4">
                                    {department.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    );
};

export default Departments;