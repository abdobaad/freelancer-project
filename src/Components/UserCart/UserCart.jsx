import React from 'react';
import image from "../../resources/image.jpg"
import Button from '../Button/Button';
import { UpperCaseFirstLetter } from '../Utils/capitlize';
import { additional_info, additional_userData, UserCart_Data } from '../Utils/data';

//icons
import Location from "../../resources/icons/pin1.svg"

import "./UserCart.scss"

const UserCart = () => {
    return (
        <div className="cart-container">
           <div  className="img_container">
           <div className="freelancer_image" style={{backgroundImage:`url(${image})`}} />
          </div>
           <div className="user-data">
               <div className="name_and_rates">
                  <p className="name">
                    {`${UpperCaseFirstLetter(UserCart_Data.firstname)} ${UpperCaseFirstLetter(UserCart_Data.lastname)}`}
                  </p>
                  <div className="rates">
                      {UserCart_Data.rates}
                  </div>
               </div>
               <h3 className="user_skill">{UpperCaseFirstLetter(UserCart_Data.job)}</h3>
               <div className="user_location">
                   <img id="icon" src={Location} />
                   <p className="country">{UpperCaseFirstLetter(UserCart_Data.country)}</p>
               </div>
               <Button text="connect"/>
               <div className="additional_data">
                   {additional_userData.map((data,i)=>(
                      <div className="additional-item">
                          <div className="bold-text">
                              <img id="icon" src={data.icon} alt={data.title}/>
                              <p>
                              {`${UpperCaseFirstLetter(data.title)} :`}
                              <div id="info">{additional_info[i]}</div>
                              </p>
                          </div>
                      </div>
                   ))}
               </div>
           </div>
        </div>
    );
};

export default UserCart;