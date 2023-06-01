import React from 'react'
import { services_Data } from './ServicesData'

const Services = () => {
    return (
        <React.Fragment>
            <div className='services-MainPage'>
                <div className='container'>
                    <div className='services-content'>
                        <ul>
                            {services_Data?.map(data => {
                                return (
                                    <li key={data?.id}>
                                        <div className='Card'>
                                            <div className='card-Icon'>
                                                {data.icon}
                                            </div>
                                            <div className='card-Title'>
                                               {data.title}
                                            </div>
                                            <div className='card-Footer'>
                                               {data.description}
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}

                        </ul>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Services