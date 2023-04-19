import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const Register = () => {

    const navigate = useNavigate();

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();



    const submithandler = () => {
        console.log("password: ", password);
        console.log("userName: ", username);
           
        if (username !== "" && password !== "") {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TOKEN_HERE'
            };
            const obj = {
                "username": username,
                "password": password
            }
            axios.post("http://localhost:4000/register", {
                headers,
                obj
            })
            .then(res => {
                console.log(res);
            })
            .catch(error =>{
                console.log("error: ", error);

            })
        }
    }
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
                                            <input
                                                type="text"
                                                placeholder='email'
                                                value={username}
                                                onChange={(e) => setUserName(e.target.value)} />
                                        </div>
                                        <div className="password-input">
                                            <input
                                                type="password"
                                                placeholder='password'
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form_footer">
                                        <button className="register-btn" onClick={submithandler}>Register </button>
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