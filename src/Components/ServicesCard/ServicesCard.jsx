import React from 'react';

import Button from '../Button/Button';
import {IsEnglish} from "../Utils/IsEnglish"
import HeartIcon from "../../resources/icons/heart.svg";
import RateIcon from "../../resources/icons/star.svg";

import "./ServicesCard.scss"
import translatedItems from '../Utils/UseLanguage';
const ServicesCard = ({image,userName,job,service_desc,freelancerImage,stars,sold,price}) => {
    return (
        <>
        <div  className="img_container">
        <div className="service_image" style={{backgroundImage:`url(${image})`}} />
       </div>
        <div className={`info--container ${!IsEnglish && "text_to_end" }`}>
        <div  className={`${!IsEnglish && "from_right"} freelance_data`} >
          {IsEnglish ?
          <>
                <img src={freelancerImage} alt="freelancer" className="freelancer_image"/>
                <div className="name_job">
                <p className="freelancer_name">{userName}</p>
                    <div className="freelancer_job">{job}</div>
                </div>
          </> 
        :
          <>
                <div className="name_job">
                <p className="freelancer_name">{userName}</p>
                    <div className="freelancer_job">{job}</div>
                </div>
                <img src={freelancerImage} alt="freelancer" className="freelancer_image"/>
          </>
        }
        </div>
        <div className="service_description">
            {service_desc}
        </div>
        <div className="service_info">
        <div className="left">
                <div className="rate">
                    <img src={RateIcon} alt="rate" id="icon"/>
                    <p>{stars}</p>
                </div>
                    <div className="sold">{`${sold} ${translatedItems.Sold}`}</div>
           </div>
           <div className="price">${price}</div>
        </div>
        <div className="buttons_flex">
        {IsEnglish ? <>
            <Button icon={HeartIcon} type="like" />
        <Button type="view" text="view"/>
        </>:<>
        <Button type="view" text="view"/>
        <Button icon={HeartIcon} type="like" />
       
        </>}
        </div>
        </div>
     </>
    );
};

export default ServicesCard;