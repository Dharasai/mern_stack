import React from 'react'
import Header from '../Header/Header'

const Contact = () => {

    return (
        <React.Fragment>
            <div className="Contact-Page">
                <div className="Contact-Page-section">
                    <div className="Contact-Page-container">
                        {/* <Header /> */}
                        <div className="Contact-Page-content">
                            <div className="Contact-Page-header">
                                <h1>
                                    Contact Us
                                </h1>
                            </div>
                            <div className="Contact-Page-body">
                                <div className="Contact-Page-row">
                                    <div className="Contact-Page-row-item">
                                    </div>
                                    <div className='item'>
                                        Netflix
                                    </div>
                                    <div className='item'>
                                        JOIN NETFLIX
                                    </div>
                                    <div className='item'>
                                        SIGN IN
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact