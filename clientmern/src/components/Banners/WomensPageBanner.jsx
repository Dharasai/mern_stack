import React from 'react'
import { bannerPageData } from '../../APIData/BannerData/women_banner';
import SplideBanner from '../Common/SplideBanner';

const WomensPageBanner = () => {
    return (
        <React.Fragment>
            <div className='home_page_bnr_main'>
                <SplideBanner data={bannerPageData} />
            </div>
        </React.Fragment>
    )
}

export default WomensPageBanner