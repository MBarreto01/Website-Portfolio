import Card from './Card.jsx'

function Projects() {
    return(
        <>
        <div className="projectsContainer">
            <p className="projectsTitle">
                Projects
            </p>

            <div className="projectsBody">
                <Card title="VidScorePro" desc="Collaborated on VidScore Pro, a web app that analyzes 
                user-submitted videos and assigns grades based on predefined metrics. Designed and 
                implemented a React frontend with JavaScript, HTML, and CSS for a seamless user experience. 
                Focused on creating a visually appealing and intuitive interface for users."/>

                <Card title="Website Portfolio" desc="Front-end React web application using JSX and CSS 
                            to create a personal portfolio website."/>

                <Card title="Stream Pilot" desc="Built a full-stack app that automates YouTube live stream 
                setup for LeetCode streamers. The React frontend offers one-click generation of problems, 
                thumbnails, titles, and descriptions. A Python backend integrates OpenAI, LeetCode, and 
                YouTube APIs to handle scheduling and workflow automation."/>
            </div>
            
        </div>
        </>
    );
}

export default Projects;