import React from 'react';
import { UpperCaseFirstLetter } from '../../Utils/capitlize';
import { Footer_data } from '../../Utils/data';

import "./Footer.scss"
const Footer = () => {
    return (
       <footer id="max_container" className="footer--container">
<div className="top">
    <div className="footer_list">
        {Footer_data.map(item=>(
            <div className="element_container">
                <div className="element-title">{UpperCaseFirstLetter(item.title)}</div>
                {item.elements.map(element=>(
                    <span className='element-item'>{UpperCaseFirstLetter(element.name)}</span>
                ))}
            </div>
        ))}
    </div>
</div>
<div className="bottom">
    <div className="copy_right">&copy; 2021 Forlanso</div>
    <div className="social_and_lang">
        <div className="social-list"></div>
        <div className="lang"><p>عربي</p></div>
    </div>
</div>
       </footer>
    );
};

export default Footer;