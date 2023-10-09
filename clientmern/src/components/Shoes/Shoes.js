import React from 'react'
import Cards from '../Common/Cards'
import { mensShoesPage1 } from "../../APIData/shoes"
const Shoes = () => {
    console.log("mensShoesPage1: ", mensShoesPage1);

    return (
        <React.Fragment>
            <div className='main_shoes'>
                <Cards data={mensShoesPage1} />
            </div>
        </React.Fragment>
    )
}

export default Shoes