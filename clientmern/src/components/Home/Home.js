import React from 'react';
import BlogBanner from '../Banners/BlogBanner';
import MenShirts from '../Men/MenShirts';
import Shoes from '../Shoes/Shoes';
import MenJeans from '../Men/MenJeans';
import MenKurtas from '../Men/MenKurtas';
import Jeans from '../Women/Jeans';
import Tops from '../Women/Tops';
import Gouns from '../Women/Gouns';


const Home = () => {



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
                <div className='banner-section'>
                    <div className='container'>
                        <BlogBanner />
                        {/* Mens Collection */}
                        <MenShirts />
                        <MenJeans />
                        <MenKurtas />
                        {/* Shoes */}
                        <Shoes />
                        {/* Women collection */}
                        <Tops />
                        <Jeans />
                        <Gouns />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home