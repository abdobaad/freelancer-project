import React from 'react';
import { IsEnglish } from '../Utils/IsEnglish';
import { en } from '../Utils/translate';
import './UnderLine.scss'
const UnderLine = ({arWidth,enWidth}) => {
    return (
        <div style={{width:`${IsEnglish ? enWidth : arWidth}`}} className="inderligne" />
    );
};

export default UnderLine;