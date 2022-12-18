import React from 'react';
import '../CSS/Navbar.css';
import Logo from "../Images/logo.png";
import Home from "../Images/home.png";
import Explore from "../Images/explore.png";
import Notifications from "../Images/notifications.png";
import Messages from "../Images/messages.png";
import Bookmark from "../Images/bookmark.png";
import Lists from "../Images/lists.png";
import Profile from "../Images/profile.png";
import More from "../Images/more.png";
import NavbarOption from '../Views/NavbarOption.js';
import '../CSS/NavbarOption.css';

function Navbar() {
    return (
        <div className='navbar'>
            { /* logo icon */ }
            <img src={Logo} id="logo"/>

            <NavbarOption active icon=<img src={Home} class="icons" /> text="Home"/>
            <NavbarOption icon=<img src={Explore} class="icons"/> text="Explore"/>
            <NavbarOption icon=<img src={Notifications} class="icons"/> text="Notifications"/>
            <NavbarOption icon=<img src={Messages} class="icons"/> text="Messages"/>
            <NavbarOption icon=<img src={Bookmark} class="icons"/> text="Bookmarks"/>
            <NavbarOption icon=<img src={Lists} class="icons"/> text="Lists"/>
            <NavbarOption icon=<img src={Profile} class="icons"/> text="Profile"/>
            <NavbarOption icon=<img src={More} class="icons"/> text="More"/>
            { /* home */ }
            { /* explore */ }
            { /* notifications */ }
            { /* messages */ }
            { /* bookmarks */ }
            { /* lists */ }
            { /* profile */ }
            { /* more */ }

            { /* tweet button */ }
            <button className="navbar__tweet" fullWidth>Chirp</button>
        </div>
    );
}

export default Navbar;