import React from 'react';

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
                        <li className="nav-item">
                            <a className="nav-link active text-danger" aria-current="page" href="">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;