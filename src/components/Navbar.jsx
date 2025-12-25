import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <header className="nav">
            <div className="container nav__inner">
                <NavLink to="/" className="nav__brand">
                    Nikunj Sethi<span className="nav__dot"></span>
                </NavLink>

                <nav className="nav__links">
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? "nav__link active" : "nav__link")}
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/projects"
                        className={({ isActive }) => (isActive ? "nav__link active" : "nav__link")}
                    >
                        Projects
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? "nav__link active" : "nav__link")}
                    >
                        Contact
                    </NavLink>

                    <a className="nav__cta" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
