import React from 'react'
import Shoes from "./Shoes";
import ShoesPageBanner from '../Banners/ShoesPageBanner';

const ShoesCollection = () => {
    return (
        <React.Fragment>
            <div className='shoes_collection_main'>
                <div className='content'>
                    <div className='banner-section'>
                        <div className='container'>
                            <ShoesPageBanner />
                            {/* Shoes */}
                            <Shoes />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ShoesCollection