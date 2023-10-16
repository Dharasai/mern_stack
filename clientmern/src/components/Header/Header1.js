import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars, faMagnifyingGlass, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setSideMenuToggle } from './HeaderSlice';
import { useNavigate } from 'react-router-dom';
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
                                BeOne
                            </div>
                            <div className='header-services'>
                                <ul>
                                    <li className='header-items' onClick={() => navigate("/home")}>
                                        Home
                                    </li>
                                    <li className='header-items' onClick={() => navigate("/menscollection")}>
                                        Mens
                                    </li>
                                    <li className='header-items' onClick={() => navigate("/womenscollection")}>
                                        Womens
                                    </li>
                                    <li className='header-items' onClick={() => navigate("/shoescollection")}>
                                        Shoes
                                    </li>
                                    <li className='header-items' onClick={() => navigate("/trending")}>
                                        Trending
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='socialmedia-services'>
                            <ul>
                                <li className='social-Media-Icons'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </li>
                                <li className='social-Media-Icons'>
                                    <FontAwesomeIcon icon={faHeart} />
                                </li>
                                <li className='social-Media-Icons' onClick={() => navigate("/cart")}>
                                    <FontAwesomeIcon icon={faCartShopping} />
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