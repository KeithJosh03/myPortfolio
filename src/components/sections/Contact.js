import React from 'react';
import { InView } from "react-intersection-observer";
import { Element } from 'react-scroll';

import email from '../../assets/icons/email.jpg';
import skype from '../../assets/icons/skype.jpg';
import linkedin from '../../assets/icons/linkedin.png';

const contactDetails = [
  {
    image: email,
    details: ["Email Address", "kitjuswa0304@gmail.com"]
  },
  {
    image: skype,
    details: ["Skype", "live:.cid.9d1ebb8d4cbcaea5"]
  },
  {
    image: linkedin,
    details: ["Linkedin", "www.linkedin.com/in/keith-joshua-salaver"]
  }
];

export default function Contact({ SectionsR: { sectionName, sectionsRef }, setInView }) {
  return (
    <Element name={sectionName}>
      <InView as="section" id={sectionName} className="border-b-2 border-red-600 Contact" ref={sectionsRef} onChange={setInView} threshold={0.8}>
        <div className="container h-svh w-full grid grid-cols-1 gap-4 m-auto justify-center text-center content-center text-white">
          <div className='col-span-1 mb-10'>
            <h1 className="font-customMono text-7xl font-bold">
              <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">G</span>
              <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">e</span>
              <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600 mr-4">t</span>
              <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">I</span>
              <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600 mr-4">n</span>
              <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">T</span>
              <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">o</span>
              <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">u</span>
              <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">c</span>
              <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">h</span>
            </h1>
          </div>
          <div className='col-span-1 text-center items-center m-auto grid grid-cols-1 gap-8'>
            {contactDetails.map((contact, index) => (
              <div key={index} className='border border-gray-300 rounded-lg p-3 w-80 m-auto'>
                <img
                  className="object-cover rounded-full mb-4"
                  height={50}
                  width={50}
                  src={contact.image}
                  alt={contact.details[0]}
                />
                <h5 className='font-customMono text-2xl font-semibold mb-2'>{contact.details[0]}</h5>
                <p className='font-interFont text-base font-normal text-gray-500 dark:text-gray-400'>{contact.details[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </InView>
    </Element>
  );
}
