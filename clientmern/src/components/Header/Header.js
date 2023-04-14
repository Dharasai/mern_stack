import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/Header/shop_logo.webp"
const Header = () => {
    return (
        <React.Fragment>
            <div className='Header'>
                <div className='header-section'>
                    <div className='header-container'>
                        <div className='header-content'>
                            <div className='header-body'>
                                <div className='header-logo'>
                                    <img src={logo} alt="logo" />
                                </div>
                                <ul className='nav'>
                                    <li className='nav-item'>
                                        <Link to="/home">
                                            Home
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/contact">
                                            Contact
                                        </Link>
                                    </li>
                                    <li className='nav-item' >
                                        <Link to="/login">
                                            Login
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/register">
                                            Register
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header