import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [userName, setUserName] = useState();

    const navigate = useNavigate();
    const usernameref = useRef();
    const passwordref = useRef();

    const handleSubmit = () => {
        console.log('Submit usernameref', usernameref.current);
        console.log('Submit passwordref', passwordref.current.value);
        console.log('Submit userName', userName);
        if(passwordref.current.value.length >= 8){
            navigate("/home")
        }
    }
    return (
        <React.Fragment>
            <div className="Login-Page">
                {/* main Login-Page*/}
                {/* section  no =>  h w media*/}
                {/* container heigth and width and media quires on this */}
                {/* content */}
                {/* header 1*/}
                {/* body 2*/}
                {/* footer 3*/}
                <div className="login-section">
                    <div className='Login-Page-container'>
                        <div className='Login-Page-content'>
                            <div className='login-header'>
                                <div className='close-icon'>
                                    <Link to="/home">
                                        Close
                                    </Link>
                                </div>
                            </div>
                            <div className='login-body'>
                                <div className="form">
                                <div className="login-body-header">
                                        Login
                                    </div>
                                    <div className='form_content'>
                                        <div className='username-input'>
                                            <input ref={usernameref} type="email" name="email" placeholder="Email" id='username-input' />
                                        </div>
                                        <div className='password-input'>
                                            <input ref={passwordref} type="password" name="password" placeholder="Password" id='password-input' onChange={(e) => setUserName(e.target.value)} />
                                        </div>
                                        <br />
                                    </div>
                                    <div className='form_footer'>
                                        <button className="submit-btn" onClick={() => handleSubmit()}>Submit</button>
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

export default Login