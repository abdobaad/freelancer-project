import React, { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import NavBurger from '../NavBurger/NavBurger';
import NavigationItems from '../NavigationItems/NavigationItems';
import { IsEnglish } from '../Utils/IsEnglish';


//styles
import "./NavBar.scss"

const NavBar = () => { 
    const [isEnglishLang,setIsEnglishLang] = useState(true);
    const [showList,setShowList] = useState(false);

    useEffect(()=>{

        //console.log(show);
       if(IsEnglish){
           setIsEnglishLang(true)
       }else{
           setIsEnglishLang(false)
       }
    },[])

     const displayMobileFNav = (show) =>{
        setShowList(show)
    } 
    
    return (
        <div style={{ backgroundColor: "#f6fcfe"}} className="upper_cont">
            <div id="max_container" className={`navbar_container ${!IsEnglish ? 'reverse':''}`}>  
               <Logo />
               <NavigationItems />
               <NavBurger displayMobileNav={(s)=>displayMobileFNav(s)}/>
              
           </div>
           {showList &&  <div className="mob_nav--list">
               <NavigationItems />
           </div>}
        </div>
    );
};

export default NavBar;