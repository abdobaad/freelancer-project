import React from 'react';

import "./Button.scss"
const Button = ({type,text,icon}) => {
    switch(type){
      case 'like':
        return (
          <button className="like_btn">
            <img id="icon" src={icon} alt="like" />
          </button>
     );
     case 'connect':
      return (
        <button className="btn">
          {text}
        </button>
     );

     case 'view':
      return (
        <button className="btn">
          {text}
        </button>
     );
     
     default:  
     return null;
    }
};

export default Button;