import React, { useState } from 'react';
import CardsList from '../CardsList/CardsList';
import { UserData_Navigation, User_data } from '../Utils/data';
import UnderLign from "../UnderLine/UnderLine"
import ClientsReviews from '../ClientsReviews/ClientsReviews';


import "./MainData.scss"
const MainData = () => {
    const [active,setActive] = useState('about')
    return (
        <div className="main_data-container">
            <div className="main_data--navigation">
                {UserData_Navigation.map(item=>(
                    <div className="navigation_item--container">
                        <span className={`navigation_item ${active === item.toLowerCase() ? "active" : "" } `} >{item}</span>
                        {active === item.toLowerCase() &&  <UnderLign />}
                    </div>
                ))}
            </div>
            <div className="about_freelancer">
                <p>
                {User_data.description}
                </p>
                <div className="freelancer_skills">
               <span>Skills :</span>
              <div className="skills-list">
              {User_data.skills.map((skill,i)=>(
                 <span className={`${i % 2 === 0 ? 'blue_color' : 'grey_color'} skill`}>{skill}</span>
               ))} 
              </div>
            </div>
            </div>
            <CardsList title="portfolio" />
            <CardsList title="services" />
            <ClientsReviews />
        </div>
    );
};

export default MainData;