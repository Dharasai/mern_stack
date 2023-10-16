import React from 'react'
import Tops from './Tops';
import Jeans from './Jeans';
import Gouns from './Gouns';
import WomensPageBanner from '../Banners/WomensPageBanner';
const WomenCollection = () => {
    return (
        <React.Fragment>
            <div className='womens_collection_main'>
                <div className='content'>
                    <div className='banner-section'>
                        <div className='container'>
                            <WomensPageBanner />
                            {/* Women collection */}
                            <Tops />
                            <Jeans />
                            <Gouns />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WomenCollection