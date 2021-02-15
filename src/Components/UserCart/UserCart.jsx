import React from 'react';
import image from "../../resources/image.jpg"
import Button from '../Button/Button';
import { UpperCaseFirstLetter } from '../Utils/capitlize';
import { IsEnglish } from '../Utils/IsEnglish';
import { additional_info, additional_userData, UserCart_Data } from '../Utils/data';

//icons
import Location from "../../resources/icons/pin.svg"
import StarIcon from "../../resources/icons/goldstar.svg";

import "./UserCart.scss"
import translatedItems from '../Utils/UseLanguage';

const UserCart = () => {
    return (
        <div className="cart-container">
           <div className="freelancer_info">
                <div  className="img_container">
                         <div className="freelancer_image" style={{backgroundImage:`url(${image})`}} />
                </div>
                <div className="user-data">
               <div className="name_and_rates">
                  <p className="name">
                    {`${UpperCaseFirstLetter(UserCart_Data.firstname)} ${UpperCaseFirstLetter(UserCart_Data.lastname)}`}
                  </p>
                  <div className={`rates ${IsEnglish ? 'to_right':'to_left'}`}>
                     <span> {UserCart_Data.rates}</span>
                     <img src={StarIcon} alt="star" id="icon"/>
                  </div>
               </div>
               <h3 className="user_skill">{UpperCaseFirstLetter(UserCart_Data.job)}</h3>
               <div className="user_location">
                   {IsEnglish ?
                    <>
                    <img id="icon" className="icon_right" src={Location} />
                   <p className="country">{UpperCaseFirstLetter(UserCart_Data.country)}</p>
                    </>
                :
                <>
                 
                   <p className="country">{UpperCaseFirstLetter(UserCart_Data.country)}</p>
                   <img id="icon" className="icon_left" src={Location} />
                </>
                }
               </div>
              </div>
             </div>
               <div className="additional_data">
               <Button type="connect" text={translatedItems.btn.Connect}/>
               
                   {additional_userData.map((data,i)=>(
                      <div key={i} className="additional-item">
                          {IsEnglish ? 
                          <div className="bold-text">
                              <img id="icon" className="icon_right" src={data.icon} alt={data.title}/>
                              <div className="item--text">
                              <p> {`${UpperCaseFirstLetter(data.title)} :`}</p>
                              <div className="info_left" id="info">{typeof additional_info[i] === "string" ? additional_info[i] : additional_info[i].join(', ')}</div>
                              </div>
                          </div>:
                          <div style={{justifyContent:'flex-end'}} className="bold-text">
                            <div className="item--text">
                            <div id="info" className="info_right">{typeof additional_info[i] === "string" ? additional_info[i] : additional_info[i].join(', ')}</div>
                            <p> {`: ${UpperCaseFirstLetter(data.title)}`}</p>
                          </div>
                            <img id="icon" className="icon_left" src={data.icon} alt={data.title}/>    
                      </div>
                          }
                      </div>
                   ))}
               </div>
           </div>
        
    );
};

export default UserCart;