import React from 'react';
import { InView } from "react-intersection-observer";
import { Element } from 'react-scroll';

import css from '../../assets/icons/css.png';
import tailwind from '../../assets/icons/tailwind.png';
import html from '../../assets/icons/html.png';
import js from '../../assets/icons/javascript.png';
import jquery from '../../assets/icons/jquery.png';
import reacttt from '../../assets/icons/react.png';
import php from '../../assets/icons/php.png';
import laravel from '../../assets/icons/laravel.png';
import git from '../../assets/icons/git.png';
import codeigniter from '../../assets/icons/codeigniter.png';

import me from '../../assets/me3.jpg';

const SkillsBrand = [
    { name: "HTML", image: html},
    { name: "CSS", image: css},
    { name: "TAILWIND", image: tailwind},
    { name: "JAVASCRIPT", image: js},
    { name: "JQUERY", image: jquery},
    { name: "REACTJS", image: reacttt},
    { name: "PHP", image: php},
    { name: "LARAVEL", image: laravel},
    { name: "GIT", image: git},
    { name: "CODEIGNITER", image: codeigniter}
];

const myDetails = [
    {label:"Name" , value: "Keith Joshua Salaver"},
    {label:"Birthday" , value: "March 4, 2001"},
    {label:"Residence" , value: "Davao City, Philippines"},
    {label:"Skype" , value: "live:.cid.9d1ebb8d4cbcaea5"},
    {label:"Email" , value: "kitjuswa0304@gmail.com"},
    {label:"Study" , value: "University of Mindanao"},
    {label:"Resume" , value: "live:.cid.9d1ebb8d4cbcaea5"}
];

const myExperience = [
    {date: "July 2022 - September 2022", position: "Junior Programmer", project:"PSO" , job: "Full Stack Web Developer, I specialize in debugging and finalizing Point of Sale systems, particularly in refining sales calculations and generating detailed receipts using TCPDF for Pharmacies."},
    {date: "October 2022 - June 2023", position: "Junior Web Developer",project: "JOINHONEY EXTENSION", job: "Maintained the HoneyJoin Extension project, aimed at enhancing the user experience on various e-commerce websites"},
    {date: "July 2023 - June 2024", position: "Junior Web Developer",project: "OSNET" , job: "Full Stack Web Developer, Developed and maintained a login and HR system for company employees"}
]

const myEducation = [
    {date:"2017-2019", level: "Senior High School", strand: "Information and Communication Technology", university: "University of Mindanao"},
    {date:"2019-2020", level: "College", strand: "College of Computing Education", university: "University of Mindanao"}
]

export default function About(
{   SectionsR: {sectionName,sectionRef},
    setInView}
){ 
  return (
    <Element name={sectionName}>
        <InView as="section" id={sectionName} className="border-b-2 border-red-600 About" ref={sectionRef} onChange={setInView} threshold={0.2}>
            <div className="container mt-10 h-auto grid grid-cols-2 gap-10 m-auto justify-center text-center text-white section">
                <div className="col-span-2">
                    <h1 className="font-customMono text-7xl font-bold">
                        <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">S</span>
                        <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">k</span>
                        <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">i</span>
                        <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">l</span>
                        <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">l</span>
                        <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600 mr-4">s</span>
                        <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600 mr-4">&</span>
                        <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">E</span>
                        <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">x</span>
                        <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">p</span>
                        <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">e</span>
                        <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">r</span>
                        <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">i</span>
                        <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">e</span>
                        <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">n</span>
                        <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">c</span>
                        <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">e</span>
                    </h1>
                </div>
                <div className="col-span-1 mt-8 text-start">
                    <div className="justify-center">
                        <h2 className="font-customMono text-4xl font-bold mb-4">Hello I Am Keith Joshua Salaver</h2>
                        <span className="font-interFont font-semibold text-base items-center text-gray-500 dark:text-gray-400 mb-4">
                        A self-motivated IT professional with knowledge and proficiency in JavaScript, HTML , CSS, and mobile responsive web development, as well as strong skills and ability in writing clean and efficient code.
                        </span>
                        <div className="details text-start mt-6">
                            <ul className="lg:grid lg:grid-cols-2 lg:grid-rows-4 lg:gap-1 2xl:grid 2xl:grid-cols-2 2xl:grid-rows-4 2xl:gap-1"> 
                                {
                                myDetails.map ((detail,key) => (
                                    <li key={key} className="underline underline-offset-8 decoration-red-600">
                                        <span>
                                            <label className="font-bold text-balance">{`${detail.label}: `}</label>
                                            {detail.value}
                                        </span>
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 m-auto justify-center">
                    <img
                    className="object-cover rounded-full outline outline-4 outline-red-600"
                    height={280}
                    width={280}
                    src={me}
                    alt="me"
                    />
                </div>
                <div className="col-span-1 mt-8 text-start">
                    <h1 className="font-customMono text-4xl font-semibold">Experience</h1>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-4">   
                        {myExperience.map(({date,position,project,job},index) => (
                            <li className="font-interFont mb-10 ms-4" key={index}>
                            <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -start-1.5 border border-red dark:border-red-600 dark:bg-red-600"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{`${date}`}</time>
                            <h3 className="font-customMono text-lg font-semibold text-gray-900 dark:text-white">{`${position} - ${project}`}</h3>
                            <p className="font-interFont text-base font-normal text-gray-500 dark:text-gray-400">{job}</p>
                        </li>  
                        ))}
                    </ol>
                </div>
                <div className="col-span-1 mt-8 text-start">
                    <h1 className="font-customMono text-4xl font-semibold">Education</h1>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-4">                  
                        {myEducation.map(({date,level,strand,university},index) => (
                        <li className="font-interFont ms-4 mb-10" key={index}>
                            <div className="absolute w-3 h-3 bg-red-600 rounded-full mt-1.5 -start-1.5 border border-red dark:border-red-600 dark:bg-red-600"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{`${date} - ${level}`}</time>
                            <h3 className="font-customMono text-lg font-semibold text-gray-900 dark:text-white">{strand}</h3>
                            <p className="font-interFont  text-base font-normal text-gray-500 dark:text-gray-400">{university}</p>
                        </li>
                        ))}
                    </ol>
                </div>
                <div className="col-span-2 grid grid-cols-5 grid-rows-2 gap-2 items-center mb-10">
                    <h1 className="col-span-5 text-start font-customMono text-4xl font-semibold">Skills</h1>
                    {SkillsBrand.map((skillbrand, key) => (
                    <div className="items-center text-center m-2" key={key}>
                        <img
                            className="cursor-pointer" 
                            src={skillbrand.image} 
                            alt={skillbrand.alt} 
                            title={skillbrand.name}
                            height={60} 
                            width={60} 
                        />
                        </div>
                    ))}
                </div>
            </div>
        </InView>
    </Element>
  )
}


