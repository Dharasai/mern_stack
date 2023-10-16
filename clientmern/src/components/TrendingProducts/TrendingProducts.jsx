import React from 'react'
import data from "../../APIData/Trending/trending.json"
const TrendingProducts = () => {
    return (
        <React.Fragment>
            <div className='slider_wrapper'>
                <div className='slider_title'>
                    <h2>{"Trending Products"}</h2>
                </div>
                <div className='trending_cards_content'>
                    {data && data.map((item, index) => {
                        const image = item?.imageUrl && item?.imageUrl || item?.image && item?.image;

                        return (
                            <div className='card' key={index}>
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
                        )
                    })}
                </div>

            </div>
        </React.Fragment>
    )
}

export default TrendingProducts