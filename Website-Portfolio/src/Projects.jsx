import Card from './Card.jsx'

function Projects() {
    return(
        <>
        <div className="projectsContainer">
            <p className="projectsTitle">
                Projects
            </p>

            <p className="projectsBody">
                <Card title="VidScorePro" desc="Web application that analyzes a video, and gives the video a 
                                                grade based off of various metrics."/>

                <Card title="Website Portfolio" desc="Front-end React web application using JSX and CSS 
                            to create a personal portfolio website."/>

                <Card title="Contact Book" desc="Stores employee information within a contact book for 
                                                company records. Utilizes various Java classes, extensions, and 
                                                arrays."/>
            </p>
            
        </div>
        </>
    );
}

export default Projects;