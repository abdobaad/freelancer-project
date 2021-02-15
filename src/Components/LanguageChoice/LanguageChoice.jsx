import React from 'react';
import { IsEnglish } from '../Utils/IsEnglish';

const LanguageChoice = () => {
    const ChangeLanguage =async () => {
       await localStorage.setItem('forlanso_language',IsEnglish ?"ar":"en")
       window.location.reload();
    }
    return (
        <div onClick={()=>ChangeLanguage()} className={`use_language ${IsEnglish ? 'english':'arabic'}`}>
        <span>{IsEnglish ? 'عربي' : 'English'}</span>
      </div>
    );
};

export default LanguageChoice;