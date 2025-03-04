import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Skills() {
    return(
        <div className="skillsContainer"> 
        
        <p className="skillsTitle">
                Skills
            </p>

        <p className="skillsBody">
            <FaReact />
            <IoLogoJavascript />
            <FaPython />
            <FaCss3 />
            <FaGithub />
        </p>

        </div>
    );
}

export default Skills;