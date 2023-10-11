import React from 'react'
// import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Header1 from '../Header/Header1'
import SideMenu from '../SideMenu/SideMenu';

import { useSelector } from 'react-redux';
const LayOut = ({ element }) => {

    const sideMenuToggle = useSelector(state => state.header.sideMenuToggle);


    return (
        <React.Fragment>
            <div className="LayOut-mainPage">
                <div className="LayOut-section">
                    <div className='Header'>
                        <Header1 />
                    </div>
                    <div className="home-section">
                        <div className={sideMenuToggle ? 'Side-Menu Open' : 'Side-Menu Close'}>
                            <SideMenu />
                        </div>
                    </div>
                </div>
                <div className="LayOut-section">
                    <div className='layout-Body'>
                        {element}
                    </div>
                </div>
                <div className="LayOut-section">
                    <div className='layout-Footer'>
                        <div className='Footer'>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LayOut