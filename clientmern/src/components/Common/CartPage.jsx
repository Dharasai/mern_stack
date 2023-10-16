import React from 'react'

const CartPage = () => {
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
                            </div>
                            <div className='product-price-details'>
                                <div className='product-description'>
                                    {"$ " + data?.price}
                                </div>
                            </div>
                            <div className='product-cart-details'>
                                <div className='product-description'>
                                    <button className='btn button2'> Add to Cart</button>
                                </div>
                                <div className='product-description'>
                                    <button className='btn button2'> Buy now</button>
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