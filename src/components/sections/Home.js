
import { ReactTyped } from "react-typed";
import { InView } from "react-intersection-observer";
import { Element } from 'react-scroll';

import React from 'react';


const downloadCV = () => {
    window.open("https://read.cv/keiths4");
}


export default function Home({ 
SectionsR: {sectionName,sectionRef},
setInView 
}){
  return (
    <Element name={sectionName}>
        <InView as="section" id={sectionName} className="border-b-2 border-red-600 Home sectionHome" ref={sectionRef} onChange={setInView} threshold={0.8}> 
            <div className="container h-svh grid grid-cols-2 justify-center items-center gap-4 m-auto text-white section transition delay-300 duration-300 ease-in-out"> 
                <div className="md:col-span-2 col-span-2">
                    <h1 className='font-customMono grid grid-rows-3 text-7xl font-bold justify-start items-center'>
                        <div>
                            <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">H</span>
                            <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">i</span>
                            <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600 mr-4">,</span>
                            <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">I</span>
                            <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">'</span>
                            <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600 mr-4">m</span>
                            <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">K</span>
                            <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">e</span>
                            <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">i</span>
                            <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">t</span>
                            <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600 mr-4">h</span>
                        </div>
                        <div>
                            <ReactTyped strings={[
                            "Web Developer",
                            "Front-End",
                            "Back-End"
                            ]}
                            typeSpeed={80}
                            loop
                            backSpeed={80}
                            cursorChar="_"
                            showCursor={true}
                            startWhenVisible
                            >
                            <span className="text-red-600">
                            </span>
                            </ReactTyped>
                        </div>
                        <p className='font-customMono text-base font-bold'>Front End Developer / Back End Developer / JavaScript Fan</p>
                        <button type="button" className="font-customMono py-2 px-2 me-2 mt-2 text-sm font-medium max-w-60	 bg-white rounded-full border border-gray-200 hover:bg-gray-10 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700"
                        onClick={downloadCV}
                        >Download CV</button>
                    </h1>
                </div>
            </div>
        </InView>
    </Element>
  )
}
