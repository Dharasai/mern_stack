import React, { useEffect, useRef } from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';


const BlogBanner = () => {
    const splideRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            splideRef.current.go('>');
        }, 3000); // Adjust the interval (in milliseconds) between slide transitions

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <React.Fragment>
            <div className='Blog-Banner-Main'>
                <div className='container'>
                    <div className='banner-content'>
                        <div className='banner-Description'>
                            <p className='title'>Technology</p>
                            <h2>Creative Space</h2>
                            <p className='sub-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <Splide hasTrack={false}
                            options={{
                                perPage: 1,
                                type: 'loop',
                                arrows: false,
                                pagination: false,
                                pauseOnHover: true,
                                interval: 3000,
                            }}
                            ref={splideRef}
                        >
                            <SplideTrack>
                                <SplideSlide id='slide1'>
                                    <img src="https://mobirise.com/extensions/coworkingamp/coworking_space/assets/images/02.jpg" alt="Image 1" />
                                </SplideSlide>
                                <SplideSlide id='slide2'>
                                    <img src="https://mobirise.com/extensions/coworkingamp/coworking_space/assets/images/07.jpg" alt="Image 2" />
                                </SplideSlide>
                                <SplideSlide id='slide3'>
                                    <img src="https://mobirise.com/extensions/coworkingamp/coworking_space/assets/images/10.jpg" alt="Image 2" />
                                </SplideSlide>
                            </SplideTrack>
                        </Splide>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BlogBanner