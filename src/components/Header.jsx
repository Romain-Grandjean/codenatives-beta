// modules
import React from 'react';

class Header extends React.Component {
    render() {
            return <div className="header">
                <img id="logo-header" src={process.env.PUBLIC_URL + "/img/logo_header.svg"} alt="logo"/>
            
                <div className="navigation">
                    <div className="nav1">
                        <span className="nav1-elements">Concept</span>
                        <span className="nav1-elements">Contribute</span>
                        <span className="nav1-elements">For Schools & Recruiters</span>
                        <div className="line-nav"></div>
                    </div>
                    <div className="nav2">
                        <span className="nav2-elements">Login</span>
                        <div className="button-signup">Sign Up</div>
                    </div>
                </div>

                <div className="line-header"></div>

            </div>


    };
};

export default Header; 