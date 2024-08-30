"use client"
import { departmentList } from "@/constants";
import Image from "next/image";
import { useEffect } from 'react';

const Departments = () => {

    useEffect(() => {
        const scrollContainer = document.querySelector('.scroll-container');
    
        const handleScroll = (evt) => {
          evt.preventDefault();
          const delta = evt.deltaY;
    
          // Apply transition
          scrollContainer.style.transition = 'scroll-left 0.5s ease-in-out';
    
          scrollContainer.scrollLeft += delta;
    
          // Remove the transition after it completes to avoid affecting normal scroll behavior
          setTimeout(() => {
            scrollContainer.style.transition = '';
          }, 50000); // Match the duration with transition timing
        };
    
        scrollContainer.addEventListener('wheel', handleScroll);
    
        return () => scrollContainer.removeEventListener('wheel', handleScroll);
      }, []);


    return (
        <div className="scroll-container text-[#ce1126] w-screen overflow-x-scroll scrollbar-hide scroll-smooth">
            <div className="flex w-max">
                {departmentList.map((department) => (
                    <div
                        key={department.id}
                        className="flex flex-col items-center justify-around bg-[#fcedde] hover:bg-hover-pattern hover:bg-cover hover:bg-center transition-all duration-300 w-screen h-[60vh] md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
                        >
                        {/*  Image */}
                        {
                            department.imgSrc && (
                                <div
                                    className="basis-2/3 flex-grow relative w-full">
                                    <Image src={department.imgSrc} alt={department.title} fill className="object-contain"/>
                                </div>
                            )
                        }

                        {/* Text */}
                        {
                            <div
                                className="basis-1/3 flex-grow flex-col flexCenter text-center gap-1">
                                <h1 className="bold-16 flexCenter text-center uppercase pt-2 md:text-base xl:text-xl xl:min-h-[60px]">
                                    {department.title}
                                </h1>
                                <p className="flexCenter py-2 px-10 md:8 xl:px-4">
                                    {department.description}
                                </p>
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Departments;

// "use client";
// import { departmentList } from "@/constants";
// import Image from "next/image";
// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// const Departments = () => {
//     const sectionRef = useRef(null);
//     const triggerRef = useRef(null);

//     gsap.registerPlugin(ScrollTrigger);

//     useEffect(() => {
//         const pin = gsap.fromTo(
//             sectionRef.current,
//             {
//                 translateX: 0,
//             },
//             {
//                 translateX: `-${departmentList.length * 100}vw`, // Dynamically move based on number of departments
//                 ease: "none",
//                 duration: 1,
//                 scrollTrigger: {
//                     trigger: triggerRef.current,
//                     start: "top top",
//                     // end: `+=${departmentList.length * 1000}`, // Adjust end value based on content
//                     end: "2000 top",
//                     scrub: 0.6,
//                     pin: true,
//                 },
//             }
//         );
//         return () => {
//             pin.kill();
//         };
//     }, []);

//     return (
//         <section className="w-screen h-[90vh]">
//             <div ref={triggerRef} className="w-full h-full">
//                 <div ref={sectionRef} className="flex w-max">
//                     {departmentList.map((department) => (
//                         <div
//                             key={department.id}
//                             className="flex flex-col items-center justify-around bg-[#fcedde] hover:bg-hover-pattern hover:bg-cover hover:bg-center transition-all duration-300 w-screen h-[60vh] md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
//                         >
//                             {/* Image */}
//                             {department.imgSrc && (
//                                 <div className="basis-2/3 flex-grow relative w-full">
//                                     <Image src={department.imgSrc} alt={department.title} fill className="object-contain"/>
//                                 </div>
//                             )}

//                             {/* Text */}
//                             <div className="basis-1/3 flex-grow flex-col flexCenter text-[#ce1126] text-center gap-1">
//                                 <h1 className="bold-16 flexCenter text-center uppercase pt-2 md:text-base xl:text-xl xl:min-h-[60px]">
//                                     {department.title}
//                                 </h1>
//                                 <p className="flexCenter py-2 px-10 md:8 xl:px-4">
//                                     {department.description}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Departments;