import React from 'react'
import { mens_kurta } from "../../APIData/Men/men_kurta"
import Cards from '../Common/Cards'
const MenKurtas = () => {
    return (
        <React.Fragment>
            <div className='main_men_shirts'>
                <Cards data={mens_kurta} title={"Men Kurta's"} />
            </div>
        </React.Fragment>
    )
}

export default MenKurtas