import React from 'react';
import WorkItem from '../WorkItem/WorkItem';

//icons
import MoneyIcon from "../../resources/icons/hand.svg"
import PinIcon from "../../resources/icons/paper-push-pin.svg"
import RedoIcon from "../../resources/icons/redo.svg"

//styles
import "./WorkInfo.scss"

const WorkInfo = () => {
    return (
        <div className="work_info-container">
            <div className="to_middle">
            <WorkItem title='total Earn' icon={MoneyIcon} data={50} />
            <WorkItem title='order Sold' icon={PinIcon} data={5} />
            <WorkItem title='Order In Progress' icon={RedoIcon} data={5} />
            </div>
        </div>
    );
};

export default WorkInfo;