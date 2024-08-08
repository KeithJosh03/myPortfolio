import '../index.css';
import About from './sections/About.js';
import Contact from './sections/Contact.js';
import Home from './sections/Home.js';
import Portfolio from './sections/Portfolio.js';

export default function Section ({SectionsR,currentView,me,setInView,setView}) {
    return (
        <main className="grid">
            <Home           
            SectionsR={SectionsR[0]}
            currentView={currentView}
            setInView={setInView}
            />
            <About SectionsR={SectionsR[1]} 
            setInView={setInView}
            />
            <Portfolio 
            SectionsR={SectionsR[2]}
            setInView={setInView}
            />
            <Contact 
            SectionsR={SectionsR[3]}
            setInView={setInView}
            />
        </main>
    );
}