import React from 'react';
import { Link } from 'react-scroll';

export default function Header ({SectionsR, currentView}) {
    return (
    <nav className="sticky top-0 z-50 bg-zinc-900 shadow-lg">
        <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
                <div className="cursor-pointer">
                    <Link to={SectionsR[0].sectionName} spy={true} smooth={true} duration={500}>
                        <h1 className="font-customMono text-xl font-bold text-white">Keith Portfolio</h1>
                    </Link>
                </div>
                <div className="2xl:flex lg:flex md:hidden sm:hidden">
                    <ul className="flex gap-4 text-lg text-white font-customMono font-bold ease-in-out duration-300 text-center cursor-pointer">
                        {SectionsR.map(({ sectionName, sectionRef }, index) => (
                            <li
                                className={`w-24 flex items-end justify-center hover:text-red-200 ${sectionName === currentView ? "text-red-600" : ""}`}
                                key={index}
                            >
                                <Link to={sectionName} spy={true} smooth={true} duration={700} offset={-30}><a href={`#${sectionName}`}>{sectionName}</a></Link>
                            </li>
                        ))}
                    </ul>        
                </div>
                <div className='2xl:hidden lg:hidden'>
                    <h1>Burger</h1>
                </div>
            </div>
        </div>
    </nav>
    );
}
