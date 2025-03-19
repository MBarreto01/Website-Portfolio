import { useRef } from 'react';
import Header from './Header';
import './App.css';
import LandingPage from './LandingPage';

function App() {

  const scrollToSection = useRef(null);

  return (
    <>
      <Header scrollToSection={(section) => scrollToSection.current?.(section)} />
      <LandingPage scrollToSection={scrollToSection} />
      
    </>
  );
}

export default App;