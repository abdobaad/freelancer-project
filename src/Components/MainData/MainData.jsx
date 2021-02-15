import React, { useState } from 'react';
import CardsList from '../CardsList/CardsList';
import { UserData_Navigation, User_data } from '../Utils/data';
import UnderLign from "../UnderLine/UnderLine"
import ClientsReviews from '../ClientsReviews/ClientsReviews';
import {IsEnglish } from "../Utils/IsEnglish";


import "./MainData.scss"
import { ArrayByLanguage } from '../Utils/ArrayByLanguage';
import translatedItems from '../Utils/UseLanguage';
import { UpperCaseFirstLetter } from '../Utils/capitlize';
const MainData = () => {
    const [active,setActive] = useState('about');
    
    return (
        <div className="main_data-container">
            <div className={`main_data--navigation ${!IsEnglish ? 'from_right':""}`}>
                {ArrayByLanguage(UserData_Navigation).map((item,i)=>(
                    <div key={`ìtem-${i}`} className={`${!IsEnglish ? 'from_right':"from_left"} navigation_item--container`}>
                        <span className={`navigation_item ${active === `${item.desc}` ? "active" : "" } `} >{UpperCaseFirstLetter(item.name)}</span>
                        {active === `${item.desc}` &&  <UnderLign />}
                    </div>
                ))}
            </div>
            <div className="about_freelancer">
                <p className={IsEnglish ? '' : 'text_to_end'}>
                {User_data.description}
                </p>
                <div className={`freelancer_skills`}>
                <div className={`${!IsEnglish ? 'reverse_items_rowly':""}`}> 
                        <span>{translatedItems.Skills}</span>
                        <span className="points">
                            {`:`}
                        </span>
                </div>
               
              <div className={`skills-list  ${!IsEnglish ? 'from_right':""}`}>
              {User_data.skills.map((skill,i)=>(
                 <span key={`skill=${i}`} className={`${i % 2 === 0 ? 'blue_color' : 'grey_color'} ${!IsEnglish ? 'arabic_display':""} skill`}>{skill}</span>
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