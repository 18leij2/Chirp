import React from 'react';
import '../CSS/NavbarOption.css';

function NavbarOption({ active, text, icon }) {
    return (
        <div className={`navbarOption ${active && 'navbarOption--active'}`}>
           {icon} <h2>{text}</h2>
        </div>
        
    )
}

export default NavbarOption;