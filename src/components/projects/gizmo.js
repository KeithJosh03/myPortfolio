import React from 'react'

import gizmo from '../../assets/gizmo.png';



export default function Gizmo () {
  return (
    <div className="container h-full w-full grid gap-4 m-auto justify-center text-center content-center text-white bg-zinc-900">
        <div className='row-span-1 m-auto cursor-pointer transition-transform transform hover:scale-110' onClick={() => {alert('Local not Online')}}>
          <img
            className="object-fill h-96 w-auto outline outline-2 outline-gray-200"
            src={gizmo}
            alt="Gizmo"
          />
        </div>
        <div className='row-span-1 text-start'>
          <p className='font-customMono text-base font-bold'>Web Applicatiion</p>
          <h1 className="font-customMono text-7xl font-bold mb-2">
              <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">P</span>
              <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">S</span>
              <span className="cursor-default transition delay-150 duration-300 ease-in-out hover:text-red-600">O</span>
          </h1>
          <h5 className='font-interFont text-base font-normal text-gray-500 dark:text-gray-400'>PSO for small local Pharmacies Use, for effiecent customer services and receipt for assure good quality drugs</h5>
          <span className='underline underline-offset-8 decoration-red-600'>
              <label className="font-bold text-balance">Built with: </label>
              JavaScript, jQuery , PHP, Scripcase, Google Cloud
          </span>
        </div>
    </div>
  )
}
