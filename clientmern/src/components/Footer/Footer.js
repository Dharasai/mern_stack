import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <React.Fragment>
            <footer>
                <div className='Footer-mainPage'>
                    <div className='footer-section'>
                        <div className='animation-section'>
                            <div className='footer-Body'>
                                <div className="social-media-icons">
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
                                        <li className='social-Media-Icons'>
                                            <FontAwesomeIcon icon={faLinkedin} />
                                        </li>
                                    </ul>
                                </div>
                                <div className="services-data">
                                    <ul>
                                        <li className='list-items'>
                                            home
                                        </li>
                                        <li className='list-items'>
                                            contact
                                        </li>
                                        <li className='list-items'>
                                            about
                                        </li>
                                        <li className='list-items'>
                                            services
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='air air1'></div>
                            <div className='air air2'></div>
                            <div className='air air3'></div>
                            <div className='air air4'></div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer