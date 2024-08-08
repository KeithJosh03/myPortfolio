import React from 'react';
import { InView } from "react-intersection-observer";
import { Element } from 'react-scroll';

import Slider from '../projects/Slider';

export default function Portfolio({
SectionsR:{sectionName ,sectionsRef },
setInView
}) {
  return (
    <Element name={sectionName}>
      <InView as="section" id={sectionName} className="border-b-2 border-red-600 Portfolio" ref={sectionsRef} onChange={setInView} threshold={0.8}>
        <Slider />
      </InView>
    </Element>
  )
}
