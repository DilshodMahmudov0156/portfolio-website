import { NavLink } from "react-router-dom";
const forActive = ({isActive}) => {
    return(
        isActive? "nav-link my-active": "nav-link"
    );
}

function NavBar(props) {
    return (
        <nav className="nav-bar d-flex justify-content-center align-items-center">
            <div className="container d-flex justify-content-between align-items-center">
                <a className="navbar-brand" href=""><h4 className="logo">D.Mahmudov</h4></a>
                <ul className="d-flex mt-3">
                    <NavLink to="/" className={forActive}>Home</NavLink>
                    <NavLink to="/skills" className={forActive}>Skills</NavLink>
                    <NavLink to="/projects" className={forActive}>Projects</NavLink>
                    <NavLink to="/contact" className={forActive}>Contact</NavLink>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;