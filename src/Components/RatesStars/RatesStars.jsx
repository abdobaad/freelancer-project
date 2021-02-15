import React from 'react';

import RatesIcon from "../../resources/icons/goldstar.svg"
import { ArrayByLanguage } from '../Utils/ArrayByLanguage';
import "./RatesStars.scss"

const RatesStars = ({stars}) => {
   
   let StarsArray = Array.from({length: stars}, (_, i) => i + 1)

    return (
        <div className="review_stars-container">
        {ArrayByLanguage(StarsArray).map(i=>(
            <img key={`icon-${i}`} src={RatesIcon} id="icon" alt="star" />
        ))}
        </div>
    );
};

export default RatesStars;