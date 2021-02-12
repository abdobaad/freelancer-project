import React from 'react';
import WorkItem from '../WorkItem/WorkItem';

import "./WorkInfo.scss"

const WorkInfo = () => {
    return (
        <div className="work_info-container">
            <div className="to_middle">
            <WorkItem title='total Earn' data={50} />
            <WorkItem title='order Sold' data={5} />
            <WorkItem title='Order In Progress' data={5} />
            </div>
        </div>
    );
};

export default WorkInfo;