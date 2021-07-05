import React from 'react'
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/nice_logo_error_page.svg";
import './header.scss'

const Header = ()=>{
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/signin'>SIGN IN</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                <Link className='option' to='/about'>ABOUT</Link>
            </div>
        </div>

    )
}

export default Header
