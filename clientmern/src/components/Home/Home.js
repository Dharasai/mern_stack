import React, { useEffect } from 'react'
import Header from '../Header/Header'
import axios from 'axios'
// import Login from '../LoginPage/Login'
// import SideBar from '../SideBar/SideBar'

const Home = () => {
    
    useEffect(() =>{
        axios.get("http://localhost:4000/user")
        .then(res => {
            console.log(res);
        })
        .catch(error =>{
            console.log("error: ", error);

        })
    },[])
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