import React, { useState } from 'react';
import { UpperCaseFirstLetter } from '../Utils/capitlize';
import {ArrayByLanguage} from "../Utils/ArrayByLanguage"
import {Filtering_data} from "../Utils/data";
import UnderLine from '../UnderLine/UnderLine'
import "./FilteringNav.scss"

const FilteringNav = () => {
    const [Active,setActive] = useState('design')
    return (
        <div className="upper_cont">
            <div id="max_container" className="filtering_container">
          {ArrayByLanguage(Filtering_data).map((item,i)=>(
              <div key={`${item.name}-${i}`} className="filter-up">
                  <span className="filter_item">
                  {UpperCaseFirstLetter(item.name)}
              </span>
              {Active === item.desc && <UnderLine />}  
              </div>
          ))}
        </div>
        </div>
    );
};

export default FilteringNav;