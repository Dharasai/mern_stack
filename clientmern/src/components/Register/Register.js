import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Header from '../Header/Header';
const Register = () => {

    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [pincode, setPincode] = useState("");
    const [status, setStatus] = useState();

    useEffect(() => {
        if (status?.message === "registered successfully") {
            navigate("/home");
        }

        console.log("status: ======", status);
    }, [status]);


    const submithandler = () => {
        console.log("password: ", password);
        console.log("userName: ", userName);

        if (userName !== "" && password !== "") {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TOKEN_HERE',
                "Accept": 'application/json'
            };
            const obj = {
                username: userName,
                password: password
            }
            axios.post("http://localhost:8000/register", obj, {
                headers: headers
            })
                .then(res => {
                    console.log(setStatus(res));
                })
                .catch(error => {
                    setStatus(error)
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
                <Header />
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
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div className="password-input">
                                            <input
                                                type="password"
                                                placeholder='password'
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="password-input">
                                            <input
                                                type="username"
                                                placeholder='username'
                                                value={userName}
                                                onChange={(e) => setUserName(e.target.value)}
                                            />
                                        </div>
                                        <div className="password-input">
                                            <input
                                                type="pincode"
                                                placeholder='pincode'
                                                value={pincode}
                                                maxLength={6}
                                                onChange={(e) => setPincode(e.target.value)}
                                            />
                                        </div>
                                        <div className="password-input">
                                            <input
                                                type="number"
                                                placeholder='Mobile No...'
                                                value={mobileNo}
                                                maxLength={10}
                                                onChange={(e) => setMobileNo(e.target.value)}
                                            />
                                        </div>
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