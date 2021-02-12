import React from 'react';
import PortfolioProject from '../PortfolioProject/PortfolioProject';
import ServicesCard from '../ServicesCard/ServicesCard';
import UnderLine from '../UnderLine/UnderLine';
import { UpperCaseFirstLetter } from '../Utils/capitlize';
import { User_data } from '../Utils/data';

import "./CardsList.scss"

const CardsList = ({title}) => {
   switch(title){
       case 'portfolio':
            return (
                <div className="cardsList_container">
                   <div className="section_title"><span className="active">{UpperCaseFirstLetter(title)}</span>
                    <UnderLine />
                   </div> 
                   <div className="cards_list">
                    {User_data.portfolio.map(({title,image})=>(
                      <PortfolioProject title={title} image={image} />
                    ))}
                    </div> 
                </div>
            );
        case 'services':
            return (
                <div className="cardsList_container">
                   <div className="section_title"><span className="active">{UpperCaseFirstLetter(title)}</span>
                   <UnderLine />
                   </div> 
                    <div className="cards_list">
                    {User_data.services.map(({image,freelancer,description,sold,price,stars})=>(
                     <ServicesCard image={image} userName={freelancer.name} freelancerImage={freelancer.image} job={freelancer.job} service_desc={description} stars={stars} sold={sold} price={price}  />
                    ))}
                    </div>
                </div> 
            )
        default: 
          return {}
   }
};

export default CardsList;