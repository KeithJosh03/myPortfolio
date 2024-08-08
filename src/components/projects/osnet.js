import React from 'react'

import osnet from '../../assets/osnet.png';


export default function Osnet() {
  return (
    <div className="container h-full w-full grid gap-4 m-auto justify-center text-center content-center text-white bg-zinc-900">
        <div className='row-span-1 m-auto cursor-pointer transition-transform transform hover:scale-110' onClick={() => {window.open("https://awesomeos.org/");}}>
          <img
            className="object-cover h-96 w-auto outline outline-2 outline-gray-200"
            src={osnet}
            alt="Honey"
          />
        </div>
        <div className='row-span-1 text-start'>
          <p className='font-customMono text-base font-bold'>WEB APPLICATION</p>
          <h1 className="font-customMono text-7xl font-bold mb-2">
              <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">O</span>
              <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">s</span>
              <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">n</span>
              <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">e</span>
              <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">t</span>
          </h1>
          <h5 className='font-interFont text-base font-normal text-gray-500 dark:text-gray-400'>Developed and maintained a login and HR system for company employees.</h5>
          <span className='underline underline-offset-8 decoration-red-600'>
              <label className="font-bold text-balance">Built with: </label>
              JavaScript, jQuery, ReactJS, PHP, CodeIgniter
          </span>
        </div>
    </div>
  )
}
