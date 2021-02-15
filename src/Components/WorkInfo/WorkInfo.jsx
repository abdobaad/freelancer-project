import React from 'react';
import WorkItem from '../../WorkItem/WorkItem';
import {ArrayByLanguage} from "../ArrayByLanguage"
//icons


//styles
import "./WorkInfo.scss"
import { WorkInfo_Nav } from '../data';

const WorkInfo = () => {
    return (
        <div className="work_info-container">
            <div className="to_middle">
            {ArrayByLanguage(WorkInfo_Nav).map((item,i)=>(
             <div key={i}  className="work-item-cont">
             <WorkItem index={i} title={item.name} icon={item.icon} data={item.data}/>
             </div>
             ) 
            )}
            </div>
        </div>
    );
};

export default WorkInfo;