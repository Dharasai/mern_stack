import React from 'react'
import Cards from '../Common/Cards'
import { gouns_Data } from "../../APIData/Gouns/gouns"
const Gouns = () => {
    console.log("gouns_Data: ", gouns_Data);
    return (
        <React.Fragment>
            <div className='main_men_shirts'>
                <Cards data={gouns_Data} title={"Women Gouns"} />
            </div>
        </React.Fragment>
    )
}

export default Gouns