import React from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
const Cards = ({ data }) => {

    return (
        <React.Fragment>
            <div className='slider_wrapper'>
                <Splide hasTrack={false}
                    options={{
                        perPage: 1,
                        pagination: false,
                        type: 'loop',
                        drag: 'free',
                        // focus: 'center',
                        speed: 1,
                        autoStart: true,
                    }}>
                    <SplideTrack>
                        {data && data.map((item, index) => {
                            const image = item?.imageUrl && item?.imageUrl || item?.image && item?.image;

                            return (
                                <SplideSlide key={index}>
                                    <div className='card'>
                                        <div className='card_content'>
                                            <div className='card_image_box'>
                                                <div className='card_image'>
                                                    <img className='card_img' src={image} alt="shirts_images" />
                                                </div>
                                            </div>
                                            <div className='card_brand_name'>
                                                {item?.brand.toUpperCase()}
                                            </div>
                                            <div className='card_price'>
                                                {"$  " + item?.price}
                                            </div>
                                            <div className='card_subtitle'>
                                                {item?.title}
                                            </div>
                                        </div>
                                    </div>
                                </SplideSlide>
                            )
                        })}
                    </SplideTrack>
                </Splide>
            </div>
        </React.Fragment>
    )
}

export default Cards