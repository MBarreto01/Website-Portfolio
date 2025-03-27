function Header({ scrollToSection }) {
    return (
      <header>
        <nav>
          <ul className="headerBar">
            <li className="myName">
              <p>Michael Barreto</p>
            </li>
  
            <li className="headerTitle" onClick={() => scrollToSection("aboutMe")}>
              About Me
            </li>
  
            <li className="headerTitle" onClick={() => scrollToSection("projects")}>
              Projects
            </li>
  
            <li className="headerTitle" onClick={() => scrollToSection("skills")}>
              Skills
            </li>

            <li className="headerTitle" onClick={() => scrollToSection("contact")}>
              Contact
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  