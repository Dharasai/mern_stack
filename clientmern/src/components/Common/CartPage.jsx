import React, { useState } from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartPage = () => {
    const [count, setCount] = useState(0)
    const data = {
        "imageUrl": "https://rukminim1.flixcart.com/image/612/612/kfmv9u80-0/jean/e/9/e/36-hljn000670-highlander-original-imafwfj6zhxw39wg.jpeg?q=70",
        "brand": "HIGHLANDER",
        "title": "Men Slim Mid Rise Black Jeans",
        "color": "black",
        "discountedPrice": 721,
        "price": 1849,
        "discountPersent": 61,
        "size": [
            {
                "name": "S",
                "quantity": 20
            },
            {
                "name": "M",
                "quantity": 30
            },
            {
                "name": "L",
                "quantity": 50
            }
        ],
        "quantity": 100,
        "topLavelCategory": "Men",
        "secondLavelCategory": "Clothing",
        "thirdLavelCategory": "men_jeans",
        "description": "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style."
    }
    return (
        <React.Fragment>
            <div className='cart_main_page'>
                <div className='container'>
                    <div className='cart-content'>
                        <div className='cart-header'>
                            <div className='product-images'>
                                <img src={data?.imageUrl} alt='image' />
                            </div>

                        </div>
                        <div className='cart-body'>
                            <div className='product-details'>
                                <h3 className='product-description'>
                                    {data?.title}
                                </h3>
                                <div className='review-status'>
                                    Review
                                </div>
                            </div>
                            <div className='product-price-details'>
                                <h4 >
                                    {"$ " + data?.price}
                                </h4>
                                <div className='product-description' >
                                    <div className='content-txt'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi.
                                    </div>
                                    <div className='content-txt'>
                                        AVAILABILITY : {" IN STOCK "}
                                    </div>
                                    <div className='content-txt'>
                                        CATEGORIES : {" JEANS "}
                                    </div>
                                    <div className='color-content'>
                                        <span className='colour-txt'>Colours : </span>
                                        <div className='color-button'><span className='colour-btn'></span></div>
                                        <div className='color-button'><span className='colour-btn'></span></div>

                                    </div>
                                </div>
                            </div>
                            <div className='product-cart-details'>
                                <div className='product-description'>
                                    <button className='btn plus-btn ' onClick={() => setCount(count - 1)}>
                                        -
                                    </button>
                                    <button className='btn plus-btn'> {count}</button>
                                    <button className='btn plus-btn' onClick={() => setCount(count + 1)}>
                                        +
                                    </button>
                                </div>
                                <div className='product-description'>
                                    <button className=' like-btn button2'>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                </div>
                                <div className='product-description'>
                                    <button className=' button2'> Add to Cart</button>
                                </div>
                                <div className='product-description'>
                                    <button className=' button2'> Buy now</button>
                                </div>
                            </div>
                        </div>
                        <div className='cart-footer'>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CartPage