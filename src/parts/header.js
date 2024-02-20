import React from 'react';

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
                    <div className="col-xl-6"></div>
                </div>
            </div>
        </header>
    );
}

export default Header;