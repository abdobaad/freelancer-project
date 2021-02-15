import React,{useEffect, useState} from 'react';
import PortfolioProject from '../PortfolioProject/PortfolioProject';
import ServicesCard from '../ServicesCard/ServicesCard';
import UnderLine from '../UnderLine/UnderLine';
import { ArrayByLanguage } from '../Utils/ArrayByLanguage';
import { UpperCaseFirstLetter } from '../Utils/capitlize';
import { User_data } from '../Utils/data';
import { IsEnglish } from '../Utils/IsEnglish';
import { TranslateText } from '../Utils/TranslateText';
import "./CardsList.scss"

const CardsList = ({title}) => {
    const [showOnlyTwo,setShowOnlyTwo] = useState(false);
    const [screenWidth,setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
      window.addEventListener('resize',()=>{
          setScreenWidth(window.innerWidth)
      })
    }, [])
   switch(title){
       case 'portfolio':
            return (
                <div className="cardsList_container">
                   <div className={`section_title ${!IsEnglish ? 'column-from_right' : ''}`}><p className="active">{
                       IsEnglish ? UpperCaseFirstLetter(title) : TranslateText(UpperCaseFirstLetter(title))
                   }</p>
                    <UnderLine arWidth={"6rem"} enWidth={"4.8rem"} />
                   </div> 
                   <div className="cards_list">
                    {ArrayByLanguage(User_data.portfolio).map(({title,image},i)=>{
                        if(screenWidth <= 970){
                            if(i<2){
                             return <div key={i} className="portfolio-card">
                                         <PortfolioProject  title={title} image={image} />
                                    </div>
                                }
                        }else{
                            return <div key={i} className="portfolio-card">
                                        <PortfolioProject  title={title} image={image} />
                                    </div>
                        }
                           
                        
                    })}
                    </div> 
                </div>
            );
        case 'services':
            return (
                <div className="cardsList_container services_list">
                    <div className={`section_title ${!IsEnglish ? 'column-from_right' : ''}`}>
                        <p className="active">{
                            IsEnglish ? UpperCaseFirstLetter(title) : TranslateText(UpperCaseFirstLetter(title))
                        }
                        </p>   
                         <UnderLine arWidth={"3.1rem"} enWidth={"4.7rem"} />
                   </div> 
                    <div className="cards_list">
                    {ArrayByLanguage(User_data.services).map(({image,freelancer,description,sold,price,stars},i)=>(
                        <div key={i} className="service_card-container">
                     <ServicesCard image={image} userName={freelancer.name} freelancerImage={freelancer.image} job={freelancer.job} service_desc={description} stars={stars} sold={sold} price={price}  />
                     </div>
                    ))}
                    </div>
                </div> 
            )
        default: 
          return {}
   }
};

export default CardsList;