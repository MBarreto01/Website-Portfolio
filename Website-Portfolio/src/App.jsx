import { useRef } from 'react';
import Header from './Header';
import './App.css';
import LandingPage from './LandingPage';

function App() {

  const scrollToSection = useRef(null);

  return (
    <>
      <Header scrollToSection={scrollToSection.current} />
      <LandingPage scrollToSection={scrollToSection.current} />
      
    </>
  );
}

export default App;