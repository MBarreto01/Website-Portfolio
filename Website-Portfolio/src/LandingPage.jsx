import { useRef, useEffect } from 'react';
import Intro from './Intro';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import ContactInfo from './ContactInfo';

function LandingPage({ scrollToSection }) {
    const aboutMeRef = useRef(null);
    const projectsRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        if (scrollToSection) {
            scrollToSection.current = (section) => {
                const sectionRefs = {
                    aboutMe: aboutMeRef,
                    projects: projectsRef,
                    skills: skillsRef,
                    contact: contactRef
                };
                sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
            };
        }
    }, [scrollToSection]);

    return (
        <>
            <Intro />

            <div ref={aboutMeRef}>
                <AboutMe />
            </div>

            <div ref={projectsRef}>
                <Projects />
            </div>

            <div ref={skillsRef}>
                <Skills />
            </div>

            <div ref={contactRef}>
                <ContactInfo />
            </div>
        </>
    );
}

export default LandingPage;
