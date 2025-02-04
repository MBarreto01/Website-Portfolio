import profilePic from './assets/Selfie2.jpg'

function Intro(){
    return(
        <div className="introContainer">
            <div className="smallSummary">
                
                <p>
                    Hi, I'm <span className="boldName">Michael Barreto!</span> 
                </p>
                
                <p className="bodyMargin">
                    I'm a software engineering student currently pursuing a 
                    bachelor's degree in computer science.
                </p>
            </div>

            <img className="profilePic"
                src={profilePic}  alt="Profile Picture">
            </img>

        </div>
    );
}

export default Intro;
