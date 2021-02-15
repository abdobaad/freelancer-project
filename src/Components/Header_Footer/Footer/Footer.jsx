import React, { useEffect, useState } from 'react';
import { UpperCaseFirstLetter } from '../../Utils/capitlize';
import { Footer_data } from '../../Utils/data';
import { ArrayByLanguage } from '../../Utils/ArrayByLanguage';

///icons
import FacebookIcon from "../../../resources/icons/facebook.svg";
import TwitterIcon from "../../../resources/icons/twitter.svg";
import LinkedinIcon from "../../../resources/icons/linkedin.svg";
import DownArrowIcon from "../../../resources/icons/down-arrow.svg";

import "./Footer.scss"
import { IsEnglish } from '../../Utils/IsEnglish';
const Footer = () => {

    const [showDetails,setShowDetails] = useState({title:"",animate:false});
    const [PageWidth,setPageWidth] = useState(window.innerWidth);

    const showTargetElements = (item) => {
        if(showDetails.title === item){
            setShowDetails({
                animate:!showDetails.animate
            })
        }else{
            setShowDetails({
                title:item,
                animate:true
            })
        }
      
    }

    useEffect(()=>{ 
       window.addEventListener('resize',()=>{
        setPageWidth(window.innerWidth)
       })
    },[])

    return (

       <footer id="max_container" className="footer--container">
            <div className="top">
                <div className={`footer_list ${IsEnglish ? 'footer_list--en':'footer_list--ar'}`}>
                    {ArrayByLanguage(Footer_data).map((item,i)=>(
                    
                        <div  key={`element__${i}_u`} className="element_container">
                            <div onClick={()=> showTargetElements(item.title)} className={`element-title ${showDetails.animate && showDetails.title === item.title ? 'animate_arrow':''}`}>
                                <p>{UpperCaseFirstLetter(item.title)}</p>
                            {PageWidth <= 650 &&  <img src={DownArrowIcon} id="icon" className="down_icon" />}
                            </div>
                           {PageWidth <= 650 ? 
                             showDetails.title === item.title && showDetails.animate ? (
                                <div className='details__cont'>
                                    {item.elements.map((element,i)=>(
                                 <span key={`element__${i}`} className='element-item'>{UpperCaseFirstLetter(element.name)}</span>
                             ))}
                                </div>
                            ) 
                            :null
                           :
                           item.elements.map((element,i)=>(
                            <span key={`element__${i}`} className='element-item'>{UpperCaseFirstLetter(element.name)}</span>
                           ))
                           }
                        </div>
                                        
                                    
                    ))}
                </div>
            </div>
            <div className="bottom">
                <div className="copy_right">&copy; 2021 Forlanso</div>
                <div className="social_and_lang">
                    <div className="social-list">
                    <img src={FacebookIcon} alt="facebook" id="icon"/>
                    <img src={TwitterIcon} alt="twitter" id="icon"/>
                    <img src={LinkedinIcon} alt="linkdin" id="icon"/>
                    </div>
                    <div className="lang"><p>{IsEnglish ? 'عربي':'english'}</p></div>
                </div>
            </div>
       </footer>
    );
};

export default Footer;