import React, { useState } from 'react';
import UnderLine from '../UnderLine/UnderLine';
import { UpperCaseFirstLetter } from '../Utils/capitlize';
import { Navebar_items } from '../Utils/data';

//styles
import "./NavBar.scss"

const NavBar = () => {
    const [activeLink,setActiveLink] = useState('services')
    return (
        <div style={{ backgroundColor: "#f6fcfe"}} className="upper_cont">
            <div id="max_container" className="navbar_container">
           <div  className="logo_container">
              <span className="logo">
                  FORLANSO
               </span>  
            </div>
            <div className="navigation_container">
              <nav className="navigation_list">
                {Navebar_items.map(item=>(
                   <div className="item">
                       <span className={`${activeLink === item.name ? 'active' : ""}`} >{UpperCaseFirstLetter(item.name)}</span>
                       {activeLink === item.name && <UnderLine /> }
                   </div> 
                ))}
              </nav>
              <div className="use_language">
                  <span>عربي</span>
              </div>
            </div>  
        </div>
        </div>
    );
};

export default NavBar;