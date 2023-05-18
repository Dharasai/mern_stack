import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
const Login = () => {

    const navigate = useNavigate();
    const usernameref = useRef();
    const passwordref = useRef();
    const { t, i18n } = useTranslation();

    const handleSubmit = () => {

        const email = usernameref.current.value;
        const password = passwordref.current.value;
        if (email !== "" && password !== "") {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TOKEN_HERE'
            };
            const obj = {
                username: email,
                password: password
            }
            axios.post("http://localhost:8000/login", obj, {
                headers: headers,
            })
                .then(res => {
                    console.log(res);
                    navigate('/home');
                })
                .catch(error => {
                    console.log("error: ", error);

                })
        }
    }

    const changeLanguage = lang => {
        i18n.changeLanguage(lang);
    }


    return (
        <React.Fragment>
            <div className="Login-Page" style={{ fontFamily: 'Gidugu' }}>
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
                                    <button onClick={() => changeLanguage('en')}>
                                        English
                                    </button>
                                    <button onClick={() => changeLanguage('te')}>
                                        Telugu
                                    </button>
                                    <button onClick={() => changeLanguage('sp')}>
                                        Spanish
                                    </button>
                                </div>
                            </div>
                            <div className='login-body'>
                                <div className="form">
                                    <div className="login-body-header">
                                        {t('hello')}
                                    </div>
                                    <div className='form_content'>
                                        <div className='username-input'>
                                            <input ref={usernameref} type="email" name="email" placeholder={t("email")} id='username-input' />
                                        </div>
                                        <div className='password-input'>
                                            <input ref={passwordref} type="password" name="password" placeholder={t("password")} id='password-input' />
                                        </div>
                                        <br />
                                    </div>
                                    <div className='form_footer'>
                                        <button className="submit-btn" onClick={() => handleSubmit()}>{t('submit')}</button>
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