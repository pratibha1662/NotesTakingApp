import React from 'react';
import logo from './images/logo.webp';


const Header = () => {
    return (
        <>
            <div className='header'>
                <img className='logo' alt="logo" src={logo} width='70' height='60'/>
                <h1 className='heading'>Keep Memories</h1>
            </div>
        </>
    )
}

export default Header; 