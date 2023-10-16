import React from 'react'
import MenShirts from "./MenShirts";
import MenJeans from "./MenJeans";
import MenKurtas from "./MenKurtas";
import MensPageBanner from '../Banners/MensPageBanner';


const MensCollection = () => {
    return (
        <React.Fragment>
            <div className='mens_collection_main'>
                <div className='content'>
                    <div className='banner-section'>
                        <div className='container'>
                            <MensPageBanner />
                            {/* Mens Collection */}
                            <MenShirts />
                            <MenJeans />
                            <MenKurtas />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MensCollection