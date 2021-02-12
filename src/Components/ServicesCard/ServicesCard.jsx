import React from 'react';
import Button from '../Button/Button';
import image1 from "../../resources/work3.jpg";

import "./ServicesCard.scss"
const ServicesCard = ({image,userName,job,service_desc,freelancerImage,rates,sold,price}) => {
    return (
        <div className="service_card-container">
        <div  className="img_container">
        <div className="service_image" style={{backgroundImage:`url(${image})`}} />
       </div>
        <div className="info--container">
        <div className="freelance_data">
            <img src={freelancerImage} alt="freelancer" className="freelancer_image"/>
           <div className="name_job">
           <p className="freelancer_name">{userName}</p>
            <div className="freelancer_job">{job}</div>
           </div>
        </div>
        <div className="service_description">
            {service_desc}
        </div>
        <div className="service_info">
           <div className="left">
           <div className="rate">{rates}</div>
            <div className="sold">{sold} sold</div>
           </div>
            <div className="price">${price}</div>
        </div>
        <div className="buttons_flex">
        <div className="like_btn">X</div>
        <Button text="view"/>
        </div>
        </div>
     </div>
    );
};

export default ServicesCard;