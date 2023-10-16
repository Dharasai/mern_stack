import React from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';


const SplideBanner = ({ data }) => {

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
                                speed: 1,
                                autoStart: true,

                            }}>
                            <SplideTrack>
                                {data && data?.map((item, index) => {
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

export default SplideBanner