import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function ContactInfo() {

    const email = "Michael.Barreto210@gmail.com";
    const linkedIn = "https://www.linkedin.com/in/michaelbarreto01/";
    const gitHub = "https://github.com/MBarreto01"

    return (
        <div className="contactContainer">
            
            <div className="contactTitle">
                Contact
            </div>
            
            <div className ="contactBody">
                
                <a href={`mailto:${email}`} className="contactIcon">
                    <CgMail />
                </a>

                Michael.Barreto210@gmail.com

                <a href={gitHub} target="_blank" rel="noopener noreferrer" className="contactIcon">
                    <FaGithub /> 
                </a>

                https://github.com/MBarreto01

                <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="contactIcon">
                    <FaLinkedin />
                </a>
                
                https://www.linkedin.com/in/michaelbarreto01/

            </div>
        </div>
    );
}

export default ContactInfo;