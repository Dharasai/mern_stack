import React from 'react'
import Cards from '../Common/Cards'
import jeans_data from "../../APIData/Men/men_jeans.json"
const MenJeans = () => {
    return (
        <React.Fragment>
            <div className='main_men_shirts'>
                <Cards data={jeans_data} title={"Men Jeans"} />
            </div>
        </React.Fragment>
    )
}

export default MenJeans