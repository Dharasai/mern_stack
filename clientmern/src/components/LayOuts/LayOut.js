import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import cart_Banner from '../../assets/images/Banners/shoppingcart_banner.jpg'
const LayOut = () => {
    return (
        <React.Fragment>
            <div className="LayOut-mainPage">
                <div className="LayOut-section">
                    <div className="container">
                        <div className='layout-Header'>
                            <Header />
                        </div>
                    </div>
                </div>
                <div className="LayOut-section">
                    <div className='layout-Body'>
                        <div className='container'>
                            <div className='shopping-cart-banner'>
                                <img src={cart_Banner} alt='cart_Banner' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="LayOut-section">
                    <div className='layout-Footer'>
                        <Footer />
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default LayOut