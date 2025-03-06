import { useRef, useEffect } from 'react';
import Intro from './Intro';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';

function LandingPage({ scrollToSection }) {
    const aboutMeRef = useRef(null);
    const projectsRef = useRef(null);
    const skillsRef = useRef(null);

    useEffect(() => {
        if (scrollToSection) {
            scrollToSection = (section) => {
                const sectionRefs = {
                    aboutMe: aboutMeRef,
                    projects: projectsRef,
                    skills: skillsRef
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
        </>
    );
}

export default LandingPage;
