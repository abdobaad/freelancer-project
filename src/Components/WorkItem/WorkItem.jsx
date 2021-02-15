import React from 'react';
import { UpperCaseFirstLetter } from '../Utils/capitlize';
import {IsEnglish} from "../Utils/IsEnglish"

import "./WorkItem.scss"

const WorkItem = ({title,icon,data}) => {
    return (
       
         <>  
               {IsEnglish ?
                <>
                 <img id="icon" className="icon icon_right" src={icon} />
                <p className="title">{UpperCaseFirstLetter(title)}</p>
                <span className="points">:</span>
                <span className="data">{data}</span>
                </>
               :
               <>
                 <span style={{    marginRight: "10px",marginLeft:"0"}} className="data">{data}</span>
                 <span className="points">:</span>
                 <p className="title">{UpperCaseFirstLetter(title)}</p>
                <img id="icon" className="icon icon_left" src={icon} />

               </>
               }
        </>
    );
};

export default WorkItem;