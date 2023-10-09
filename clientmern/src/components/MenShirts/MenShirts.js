import React from 'react'
import shirts_data from "../../APIData/Men/men_shirt.json";
import Cards from '../Common/Cards';
const MenShirts = () => {
    return (
        <React.Fragment>
            <div className='main_men_shirts'>
                <Cards data={shirts_data} />
            </div>
        </React.Fragment>
    )
}

export default MenShirts;




// import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
//     < Splide hasTrack = { false}
// options = {{
//     perPage: 1,
//         pagination: false,
//             type: 'loop',
//                 drag: 'free',
//                     // focus: 'center',
//                     speed: 1,
//                         autoStart: true,
//                     }}>
//     <SplideTrack>
//         {shirts_data && shirts_data.map((item, index) => {
//             console.log(item);
//             return (
//                 <SplideSlide key={index}>
//                     <div className='card'>
//                         <div className='card_content'>
//                             <div className='card_image_box'>
//                                 <div className='card_image'>
//                                     <img className='card_img' src={item?.imageUrl} alt="shirts_images" />
//                                 </div>
//                             </div>
//                             <div className='card_brand_name'>
//                                 {item?.brand.toUpperCase()}
//                             </div>
//                             <div className='card_price'>
//                                 {"$  " + item?.price}
//                             </div>
//                             <div className='card_subtitle'>
//                                 {item?.title}
//                             </div>
//                         </div>
//                     </div>
//                 </SplideSlide>
//             )
//         })}
//     </SplideTrack>