import React from 'react';

import "./PortfolioProject.scss"

const PortfolioProject = ({title,image}) => {
    return (
       <>
            <div className="mask" />
           <img className="image" src={image} />
           <p className="title">{title}</p>      
        </>
    );
};

export default PortfolioProject;