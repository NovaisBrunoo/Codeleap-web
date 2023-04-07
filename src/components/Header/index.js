import React from "react";
import './style.css';
import vectorLogo from '../../assets/vector-codeleap.svg'

function Header() {
    return (
        <header>
            <img src={vectorLogo} alt="logo" />
        </header>
    );
}

export default Header;