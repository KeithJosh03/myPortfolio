import './index.css';

import { useRef, useState} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import Section from './components/Sections';
import Header from './components/Header';
import Footer from './Footer';



function App() {

let [currentView, setView] = useState('');

// Sections Ref
const SectionsR = [
  { sectionName: 'Home', sectionRef: useRef(null) },
  { sectionName: 'About', sectionRef: useRef(null) },
  { sectionName: 'Portfolio', sectionRef: useRef(null) },
  { sectionName: 'Contact', sectionRef: useRef(null) }
];



// Callback for react-intersection-observer monitor which section occupied viewport
const setInView = (inView, entry) => {
  if(inView){
    setView(entry.target.getAttribute("id"))
  }
}

  return (
    <>
      <Header 
        SectionsR={SectionsR} 
        currentView={currentView}
      />
      <Router>
        <Section 
          SectionsR={SectionsR}
          currentView={currentView}
          setInView={setInView}
          setView={setView}
        />      
      </Router>
      <Footer />
    </>
  );
}

export default App;

// Burger for Navbar
// Home Section