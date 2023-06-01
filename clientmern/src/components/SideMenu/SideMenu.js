import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import { setSideMenuToggle } from '../Header/HeaderSlice';
import { useDispatch, useSelector } from 'react-redux';


const SideMenu = () => {
    const dispatch = useDispatch();
    const sideMenuToggle = useSelector(state => state.header?.sideMenuToggle)

    return (
        <React.Fragment>
            <div className='side-Menu-main'>
                <div className='container'>
                    <div className="sideMenu-content">
                        <div className='menu-close-Icon'  onClick={() => dispatch(setSideMenuToggle(!sideMenuToggle))}>
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                        <div className='sideMenu-Services'>
                            <ul>
                                <li className="sideMenu-Items">Home</li>
                                <li className="sideMenu-Items">Benfits</li>
                                <li className="sideMenu-Items">About</li>
                                <li className="sideMenu-Items">Blog</li>
                                <li className="sideMenu-Items">View</li>
                            </ul>
                        </div>
                        <div className='sideMenu-SocialMediaIcons'>
                            <ul>
                                <li className="sideMenu-Icons">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </li>
                                <li className="sideMenu-Icons">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </li>
                                <li className="sideMenu-Icons">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SideMenu