import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

const navigate = useNavigate();


    return (
        <React.Fragment>
            {/* main Login-Page*/}
            {/* section  no =>  h w media*/}
            {/* container heigth and width and media quires on this */}
            {/* content */}
            {/* header 1*/}
            {/* body 2*/}
            {/* footer 3*/}
            <div className="register-page">
                <div className="register-section">
                    <div className="container">
                        <div className="register-content">
                            <div className="register-header" onClick={() => navigate("/home")}>
                                    Close
                            </div>
                            <div className="register-body">
                                <div className="form">
                                    <div className="register-body-header">
                                        Register
                                    </div>
                                    <div className='form_content'>
                                        <div className="username-input">
                                            <input type="email" placeholder='email' />
                                        </div>
                                        <div className="password-input">
                                            <input type="password" placeholder='password' />
                                        </div>
                                    </div>
                                    <div className="form_footer">
                                        <button className="register-btn">Register </button>
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

export default Register