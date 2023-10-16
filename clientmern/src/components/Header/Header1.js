import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setSideMenuToggle } from './HeaderSlice';
import { Link, useNavigate } from 'react-router-dom';
const Header1 = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const sideMenuToggle = useSelector(state => state.header.sideMenuToggle);
    return (
        <React.Fragment>
            <header>
                <div className='container'>
                    <div className='header-body'>
                        <div className='header-content'>
                            <div className='header-title'>
                                E-Kart
                            </div>
                            <div className='header-services'>
                                <ul>
                                    <li className='header-items' onClick={() => navigate("/home")}>
                                        Home
                                    </li>
                                    <li className='header-items'>
                                        Benfits
                                    </li>
                                    <li className='header-items'>
                                        About
                                    </li>
                                    <li className='header-items'>
                                        Blog
                                    </li>
                                    <li className='header-items' onClick={() => navigate("/cart")}>
                                        View
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='socialmedia-services'>
                            <ul>
                                <li className='social-Media-Icons'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </li>
                                <li className='social-Media-Icons'>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </li>
                                <li className='social-Media-Icons'>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </li>
                            </ul>
                            <div className='sideMenu-Icon'>
                                <div className='Menu-Icon' onClick={() => dispatch(setSideMenuToggle(!sideMenuToggle))}>
                                    <FontAwesomeIcon icon={faBars} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header1