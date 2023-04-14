import React from 'react'
import Header from '../Header/Header'
// import Login from '../LoginPage/Login'
// import SideBar from '../SideBar/SideBar'

const Home = () => {
    return (
        <React.Fragment>
            <div className='Home-page'>
                <div className='sideBar'>
                    <Header />
                </div>
                <section className="home">
                    <div className="text" style={{color: "white"}}>
                    saikumar

                    </div>
                </section>
            </div>
        </React.Fragment>
    )
}

export default Home