import React from 'react'
import women_tops_data from "../../APIData/Women/Women_top.json"
import Cards from '../Common/Cards'
const Tops = () => {
    return (
        <React.Fragment>
            <div className='main_men_shirts'>
                <Cards data={women_tops_data} title={"Women Tops"} />
            </div>
        </React.Fragment>
    )
}

export default Tops