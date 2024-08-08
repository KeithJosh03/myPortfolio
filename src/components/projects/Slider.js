import React, { useState } from 'react';
import IntroProjects from './introproject';
import HoneyExtension from './honeyextension';
import Osnet from './osnet';
import Gizmo from './gizmo';


const components = [IntroProjects, HoneyExtension, Osnet, Gizmo];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransition = (newIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? components.length - 1 : currentIndex - 1;
    handleTransition(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === components.length - 1 ? 0 : currentIndex + 1;
    handleTransition(newIndex);
  };

  const CurrentComponent = components[currentIndex];

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <button 
        onClick={goToPrevious} 
        className="absolute left-5 text-2xl bg-white p-2 rounded-full shadow-md transition-transform transform hover:scale-110 hover:bg-gray-200 h-14 w-14 focus:outline-none"
      >
        ❮
      </button>
      <div className={`w-full h-full flex items-center justify-center transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <CurrentComponent />
      </div>
      <button 
        onClick={goToNext} 
        className="absolute right-5 text-2xl bg-white p-2 rounded-full shadow-md transition-transform transform hover:scale-110 hover:bg-gray-200 h-14 w-14 focus:outline-none"
      >
        ❯
      </button>
    </div>
  );
}
