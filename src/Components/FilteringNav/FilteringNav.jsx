import React, { useState } from 'react';
import { UpperCaseFirstLetter } from '../Utils/capitlize';
import {Filtering_data} from "../Utils/data";
import UnderLine from '../UnderLine/UnderLine'
import "./FilteringNav.scss"

const FilteringNav = () => {
    const [Active,setActive] = useState('design')
    return (
        <div className="upper_cont">
            <div className="filtering_container">
          { Filtering_data.map(item=>(
              <div className="filter-up">
                  <span className="filter_item">
                  {UpperCaseFirstLetter(item.name)}
              </span>
              {Active === item.name && <UnderLine />}
              
              </div>
          ))}
        </div>
        </div>
    );
};

export default FilteringNav;