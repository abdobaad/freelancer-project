import React from 'react';
import { UpperCaseFirstLetter } from '../Utils/capitlize';

import "./WorkItem.scss"

const WorkItem = ({title,icon,data}) => {
    return (
        <div className="work-item-cont">
           
                <img id="icon" className="icon" src={icon} />
                <p className="title">{UpperCaseFirstLetter(title)}:</p>
                <span className="data">{data}</span>
          
        </div>
    );
};

export default WorkItem;