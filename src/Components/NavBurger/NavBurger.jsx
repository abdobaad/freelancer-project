import React, { useEffect, useState } from 'react';

import "./NavBurger.scss"

const NavBurger = ({displayMobileNav}) => {
    const [showNav,setShowNav] = useState(false);
   
    const showMobileNav = () => {
        displayMobileNav(!showNav);
         setShowNav(!showNav);
       
           
    }
    return (
        <div onClick={()=>showMobileNav()} className={`navburger_container ${showNav && "animate"}`} >
           <div className="navburger__ligne" />     
        </div>
    );
};

export default NavBurger;