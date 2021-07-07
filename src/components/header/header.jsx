import React from 'react'
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/nice_logo_error_page.svg";
import {signOut} from '../../firebase/auth';
import './header.scss'

const Header = ({user, userDetails}) => {
    const onClickSignOut = async () => {
        try {
            // Firebase code goes here
            await signOut();
        } catch (e) {
            alert(e.message);
        }
    }
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                {!user && <Link className='option' to='/signin'>SIGN IN</Link> }
                {user && <Link className='option' to='/' onClick={onClickSignOut}>SIGN OUT</Link>}
                <Link className='option' to='/contact'>CONTACT</Link>
                <Link className='option' to='/about'>ABOUT</Link>
            </div>
        </div>

    )
}

export default Header
