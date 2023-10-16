import React from 'react'
import { mensPageBannerData } from '../../APIData/BannerData/mens_banner_data';
import SplideBanner from '../Common/SplideBanner';

const MensPageBanner = () => {
    return (
        <React.Fragment>
            <div className='home_page_bnr_main'>
                <SplideBanner data={mensPageBannerData} />
            </div>
        </React.Fragment>
    )
}

export default MensPageBanner