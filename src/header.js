import React from 'react';
import logo from "./assests/images/logo512.png"


const Header = () => {
    return (
        <div className="header">
            <a href="#" >
                <img src={logo} width="50" height="50" />
            </a>
            <ul>
                <li>Welcome</li>
                <li>Teams</li>
                <li>Calture</li>
                <li>Student</li>

            </ul>
            <button>All Jobs</button>


        </div>
    );
}

export default Header;