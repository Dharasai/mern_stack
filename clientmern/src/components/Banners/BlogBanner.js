import React from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
const BlogBanner = () => {
    return (
        <React.Fragment>
            <div className='Blog-Banner-Main'>
                <div className='container'>
                    <div className='banner-content'>
                        <Splide hasTrack={false}
                            options={{
                                perPage: 1,
                                pagination: false,
                            }}>
                            <SplideTrack>
                                <SplideSlide>
                                    <img src="https://img.freepik.com/free-photo/businesspeople-meeting-office-working_23-2148908920.jpg?w=900&t=st=1685543014~exp=1685543614~hmac=36608e8556e8f84755d9919ef4ddf8cac8b16349c7bb7a9cfeb0801bb2d9bc67" alt="Image 1" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src="https://img.freepik.com/free-photo/businesspeople-meeting-office-working_23-2148908920.jpg?w=900&t=st=1685543014~exp=1685543614~hmac=36608e8556e8f84755d9919ef4ddf8cac8b16349c7bb7a9cfeb0801bb2d9bc67" alt="Image 2" />
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