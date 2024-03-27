import { NavLink } from "react-router-dom";
const forActive = ({isActive}) => {
    return(
        isActive? "nav-link my-active": "nav-link"
    );
}

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href=""><h4 className="logo">D.Mahmudov</h4></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <NavLink to="/" className={forActive}>Home</NavLink>
                        <NavLink to="/skills" className={forActive}>Skills</NavLink>
                        <NavLink to="/projects" className={forActive}>Projects</NavLink>
                        <NavLink to="/contact" className={forActive}>Contact</NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;