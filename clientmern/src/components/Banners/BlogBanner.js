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
                                    <img src="https://img.freepik.com/free-photo/portrait-young-asian-woman-isolated-blue-studio-space_155003-12397.jpg?w=1060&t=st=1685602063~exp=1685602663~hmac=fa4c17971547c5b051ae23493d5c6df5784e8f342fe1623cf1a5285a502c2020" alt="Image 1" />
                                </SplideSlide>
                                <SplideSlide id='slide2'>
                                    <img src="https://img.freepik.com/free-photo/confident-macho-man-put-sunglasses-looking-cool-sassy-standing-blue-background_1258-153254.jpg?w=1060&t=st=1685601932~exp=1685602532~hmac=31a7efe6d5085f624eefe0237485e0bff380cd04cc193f75e90aa9eb32e0c59e" alt="Image 2" />
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