
import React from 'react'
import { shoesPageBannerData } from '../../APIData/BannerData/mens_banner_data';
import SplideBanner from '../Common/SplideBanner';

const ShoesPageBanner = () => {
    return (
        <React.Fragment>
            <div className='home_page_bnr_main'>
                <SplideBanner data={shoesPageBannerData} />
            </div>
        </React.Fragment>
    )
}

export default ShoesPageBanner