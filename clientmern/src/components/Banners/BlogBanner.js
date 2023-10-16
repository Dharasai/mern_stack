import React, { useEffect, useRef } from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { bannerPageData } from '../../APIData/BannerData/women_banner';


const BlogBanner = () => {

    return (
        <React.Fragment>
            <div className='Blog-Banner-Main'>
                <div className='container'>
                    <div className='banner-content'>
                        <Splide hasTrack={false}
                            options={{
                                perPage: 1,
                                type: 'loop',
                                arrows: false,
                                pagination: false,
                                type: 'loop',
                                // drag: 'free',
                                // focus: 'center',
                                speed: 1,
                                autoStart: true,

                            }}>
                            <SplideTrack>
                                {bannerPageData && bannerPageData?.map((item, index) => {
                                    return (
                                        <SplideSlide key={index}>
                                            <div className='banner'>
                                                <img src={item?.image} alt="Image 1" />
                                            </div>
                                        </SplideSlide>
                                    )
                                })}
                            </SplideTrack>
                        </Splide>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BlogBanner