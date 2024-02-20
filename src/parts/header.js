import React from 'react';
import myi_mage from "../images/photo_2024-02-20_23-58-04.jpg";

function Header({}) {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <h1 className="header-blue">Hi there!</h1>
                        <h1 className="header-blue">I'm <span>Dilshod Mahmudov</span></h1>
                        <h3>I'm <span className="header-red">Front-End developer</span></h3>
                    </div>
                    <div className="col-xl-6">
                        <div className="my-image">
                            <img src={myi_mage} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;