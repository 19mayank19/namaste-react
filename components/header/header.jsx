import React from 'react';
import "./header.css";
import { PhonepeLogo, Profile } from '../../assets/images';

const Header = () => {
    return (
        <div className='container'>
            <div>
                <img src={PhonepeLogo} alt="Phonepe logo" className='phonepe-logo' />
            </div>
            <div>
                <input type="text" placeholder="Search here ..." className='search-bar' />
            </div>
            <div>
                <img src={Profile} alt="Profile icon" className='profile-icon' />
            </div>
        </div>
    )
}
export default Header;