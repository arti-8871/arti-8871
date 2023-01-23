import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"   />



let listItem = [
  {
    id: 1,
    item: "Product",
  },
  {
      id: 2,
      item: "Science",
    },
    {
      id: 3,
      item: "Certifications",
    },
    {
      id: 4,
      item: "Licenses",
    },
    {
      id: 5,
      item: "Integration",
    },
    {
      id: 6,
      item: "Patnership",
    },
    {
      id: 7,
      item: "After Sales",
    },
  ];

function SideBar(props){
    return(
        <>
        <div className="Sidebar">
        <div className="SideItem Mobile">           
           <Swiper
         slidesPerView={3}
         spaceBetween={30}
         slidesPerGroup={3}
         loop={true}
         loopFillGroupWithBlank={true}
         pagination={{
           clickable: true,
         }}
         navigation={true}
         modules={[Pagination, Navigation]}
         className="sideBarItems mySwiper"
       >
         {listItem.map((i) => {
               return (
                 <SwiperSlide
                   className={`item`}
                   key={i.id}
                   onClick={() => props.changeComponet(i.id)}>
                   {i.item}
                 </SwiperSlide>
               );
             })}
             
     {/* </Swiper> */}
           </Swiper>        
         </div>
 
          <div className="SideItem desktop">
           <p>Dozee Faq</p>
           <h4>Frequently Asked Questions</h4>
           <ul className="sideBarItems">
             {listItem.map((i) => {
               return (
                 <li
                   className={`item font-20`}
                   key={i.id}
                   onClick={() => props.changeComponet(i.id)}>
                   {i.item}
                 </li>
               );
             })}
             
           </ul>
           <p className="reachOut font-20">Can’t find the answer you’re looking for?</p>
             <a className="reachBtn" href="/">reach Out to us</a>
         </div>


        </div>
        
        
        </>
    )
}

export default SideBar; 