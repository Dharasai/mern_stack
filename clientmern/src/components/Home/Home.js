import React from 'react';
import TrendingProducts from '../TrendingProducts/TrendingProducts';
import HomePageBanner from '../Banners/HomePageBanner';
import Collections from '../Banners/Collections';



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
                        <HomePageBanner />
                        <Collections />
                        <TrendingProducts />

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home