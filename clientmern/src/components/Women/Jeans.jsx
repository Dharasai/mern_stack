import React from 'react'
import Cards from '../Common/Cards'
import women_jeans_data from "../../APIData/Women/Women_jeans.json"
const Jeans = () => {
    return (
        <React.Fragment>
            <div className='main_men_shirts'>
                <Cards data={women_jeans_data} title={"Women Jeans"} />
            </div>
        </React.Fragment>
    )
}

export default Jeans