import Card from './Card.jsx'

function Projects() {
    return(
        <>
        <div className="projectsContainer">
            <p className="projectsTitle">
                Projects
            </p>

            <p className="projectsBody">
                <Card title="VidScorePro" desc=""/>
                <Card title="Website Portfolio" desc=""/>
                <Card title="Contact Book" desc=""/>
            </p>
            
        </div>
        </>
    );
}

export default Projects;