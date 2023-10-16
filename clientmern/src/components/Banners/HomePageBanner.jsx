import React from 'react'
import { homePageBannerData } from '../../APIData/BannerData/homepage_banner';
import SplideBanner from '../Common/SplideBanner';

const HomePageBanner = () => {
    return (
        <React.Fragment>
            <div className='home_page_bnr_main'>
                <SplideBanner data={homePageBannerData} />
            </div>
        </React.Fragment>
    )
}

export default HomePageBanner