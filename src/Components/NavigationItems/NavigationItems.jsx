import React, { useState } from 'react';
import LanguageChoice from '../LanguageChoice/LanguageChoice';
import { IsEnglish } from '../Utils/IsEnglish';
import NavBarList from './NavBarList/NavBarList';

import "./NavigationItems.scss"

const NavigationItems = () => {
    const [activeLink,setActiveLink] = useState('services')
    console.log("english:", IsEnglish);
    return (
        <div className="navigation_container">
              {IsEnglish 
              ?
              <>
               <NavBarList activeLink={activeLink} />
               <LanguageChoice />
              </>
            :
            <>
              <LanguageChoice />
              <NavBarList activeLink={activeLink} />
           
            </>
            }
            </div>
    );
};

export default NavigationItems;