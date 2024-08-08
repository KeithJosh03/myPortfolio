import React from 'react'

import Honey from '../../assets/honeyextension.png';



export default function HoneyExtension() {
  return (
    <div className="container h-full w-full grid gap-4 m-auto justify-center text-center content-center text-white bg-zinc-900">
        <div className='row-span-1 m-auto cursor-pointer transition-transform transform hover:scale-110' onClick={() => {window.open("https://www.joinhoney.com/");}}>
          <img
            className="object-fill h-96 w-auto outline outline-2 outline-gray-200"
            src={Honey}
            alt="Honey"
          />
        </div>
        <div className='row-span-1 text-start'>
          <p className='font-customMono text-base font-bold'>BROWSER EXTENSION</p>
          <h1 className="font-customMono text-7xl font-bold mb-2">
              <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">H</span>
              <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">o</span>
              <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">n</span>
              <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">e</span>
              <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">y</span>
          </h1>
          <h5 className='font-interFont text-base font-normal text-gray-500 dark:text-gray-400'>Honey is a browser extension that automatically finds and applies coupon codes at checkout, helping users save money on their online purchases.</h5>
          <span className='underline underline-offset-8 decoration-red-600'>
              <label className="font-bold text-balance">Built with: </label>
              JavaScript, jQuery , PHP
          </span>
        </div>
    </div>
  )
}
