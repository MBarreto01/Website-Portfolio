function Header({ scrollToSection }) {
    return (
      <header>
        <nav>
          <ul className="headerBar">
            <li className="myName">
              <p>Michael Barreto</p>
            </li>
  
            <div className="headerTitle" onClick={() => scrollToSection("aboutMe")}>
              About Me
            </div>
  
            <div className="headerTitle" onClick={() => scrollToSection("projects")}>
              Projects
            </div>
  
            <div className="headerTitle" onClick={() => scrollToSection("skills")}>
              Skills
            </div>

            <div className="headerTitle">
              Contact
            </div>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  