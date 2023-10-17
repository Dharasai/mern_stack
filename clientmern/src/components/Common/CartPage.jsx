import React, { useEffect, useState } from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cart_data from "../../APIData/Cart/cartdata.json";
import sizechart from "../../APIData/Cart/sizechart.json";

const CartPage = () => {
    const [count, setCount] = useState(0);
    const [cartTabData, setCartTabData] = useState("description");
    const [product, setProduct] = useState();

    useEffect(() => {
        const product = cartTabData === "description" ? cart_data[0].description : cartTabData === "delivery" ? cart_data[0].delivery : cartTabData === "reviews" ? cart_data[0].customerreview : "";
        setProduct(product)
    }, [cartTabData]);

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
                                    <div className='txt'>Review</div>
                                </div>
                            </div>
                            <div className='product-price-details'>
                                <h1 >
                                    {"$ " + data?.price}
                                </h1>
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

                            <div className='cart-footer-description'>
                                <ul className='description-tabs'>
                                    <li className={`tab-item ${cartTabData === "description" && "active"}`} onClick={() => setCartTabData("description")}>Description</li>
                                    <li className={`tab-item ${cartTabData === "reviews" && "active"}`} onClick={() => setCartTabData("reviews")}>Reviews</li>
                                    <li className={`tab-item ${cartTabData === "sizechart" && "active"}`} onClick={() => setCartTabData("sizechart")}>SizeChart</li>
                                    <li className={`tab-item ${cartTabData === "delivery" && "active"}`} onClick={() => setCartTabData("delivery")}>Shipping & Delivery</li>
                                </ul>
                                <div className='tab-content'>
                                    {cartTabData !== "sizechart" ?
                                        <p>{product}</p>
                                        :
                                        <div className='table'>
                                            <table>
                                                <tr>
                                                    <th>SIZE</th>
                                                    <th>CHEST(IN.)</th>
                                                    <th>WAIST(IN.)</th>
                                                    <th>HIPS(IN.)</th>
                                                </tr>

                                                {
                                                    Object.entries(sizechart[0].sizechart).map(([size, measurements]) => {
                                                        return (
                                                            <tr>
                                                                <td>{size}</td>
                                                                <td>{measurements.chest}</td>
                                                                <td>{measurements.waist}</td>
                                                                <td>{measurements.hips}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </table>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CartPage