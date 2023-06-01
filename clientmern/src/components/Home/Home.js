import React, { useEffect } from 'react';
// import Header from '../Header/Header';
// import axios from 'axios';
import CreatePost from '../CreatePost/CreatePost';
import Header1 from '../Header/Header1';
import SideMenu from '../SideMenu/SideMenu';
import { useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
import BlogBanner from '../Banners/BlogBanner';
import Benifits from '../Benifits/Benifits';
import Services from '../Services/Services';
// import Login from '../LoginPage/Login';
// import SideBar from '../SideBar/SideBar';

const Home = () => {

    const sideMenuToggle = useSelector(state => state.header.sideMenuToggle);

    useEffect(() => {
        // axios.get("http://localhost:8000/user")
        //     .then(res => {
        //         console.log("userS", res);
        //     })
        //     .catch(error => {
        //         console.log("error: ", error);

        //     })

        // axios.get("http://localhost:8000/profile", {
        //     credentials: 'include',
        // })
        //     .then(res => {
        //         console.log("-profiletoken", res);
        //     })
        //     .catch(error => {
        //         console.log("error: ", error);

        //     });


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
                <div className='Header'>
                    <Header1 />
                </div>
                <div className="home-section">
                    <div className="home-container">
                        <div className="home-content">
                            <div className='content-body'>
                                <CreatePost />
                            </div>
                        </div>
                    </div>
                    <div className={sideMenuToggle ? 'Side-Menu Open' : 'Side-Menu Close'}>
                        <SideMenu />
                    </div>
                </div>
                <div className='banner-section'>
                    <BlogBanner />
                </div>
                <div className='benifits-section'>
                    <Benifits />
                </div>
                <div className='services-section'>
                    <Services />
                </div>
                <div className='Footer'>
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home