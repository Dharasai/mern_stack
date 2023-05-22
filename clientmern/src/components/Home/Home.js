import React, { useEffect } from 'react'
import Header from '../Header/Header'
import axios from 'axios'
import CreatePost from '../CreatePost/CreatePost'
// import Login from '../LoginPage/Login'
// import SideBar from '../SideBar/SideBar'

const Home = () => {

    useEffect(() => {
        axios.get("http://localhost:8000/user")
            .then(res => {
                console.log("userS", res);
            })
            .catch(error => {
                console.log("error: ", error);

            })

        axios.get("http://localhost:8000/profile", {
            credentials: 'include',
        })
            .then(res => {
                console.log("-profiletoken", res);
            })
            .catch(error => {
                console.log("error: ", error);

            });


    }, [])
    return (
        <React.Fragment>
            {/* main Login-Page*/}
            {/* section  no =>  h w media*/}
            {/* container heigth and width and media quires on this */}
            {/* content */}
            {/* header 1*/}
            {/* body 2*/}
            {/* footer 3*/}
            <div className='Home-page'>
                <div className='sideBar'>
                    <Header />
                </div>
                <div className="home-section">
                    <div className="home-container">
                        <div className="home-content">
                            <div className='content-body'>
                                <CreatePost />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home