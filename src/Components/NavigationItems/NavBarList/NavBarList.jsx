import React from 'react';
import UnderLine from '../../UnderLine/UnderLine';
import { ArrayByLanguage } from '../../Utils/ArrayByLanguage';
import { UpperCaseFirstLetter } from '../../Utils/capitlize';
import { Navebar_items } from '../../Utils/data';

const NavBarList = ({activeLink}) => {
    return (
        <nav className="navigation_list">
        {ArrayByLanguage(Navebar_items).map((item,i)=>(
           <div key={`${item.name}-${i}`} className="item">
               <span className={`${activeLink === item.desc ? 'active' : ""}`} >{UpperCaseFirstLetter(item.name)}</span>
               {activeLink === item.desc && <UnderLine /> }
           </div> 
        ))}
        </nav>
    );
};

export default NavBarList;