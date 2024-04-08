import React from 'react';
import my_image from "../images/my-picture.png";

function Header({}) {
    return (
        <header>
            <div className="container mt-5">
                <div className="row align-items-center justify-content-between mt-4">
                    <div className="col-xl-6">
                        <h1 className="header-blue">Hi there!</h1>
                        <h1 className="header-blue">I'm <span>Dilshod Mahmudov</span></h1>
                        <h3>I'm <span className="header-red">Front-End developer</span></h3>
                    </div>
                    <div className="col-xl-5">
                        <img src={my_image} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;