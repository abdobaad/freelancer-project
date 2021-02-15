import {en,ar} from "../Utils/translate";

const lang = localStorage.getItem('forlanso_language');
let translatedItems;

if(lang === 'en' || lang === undefined){
   translatedItems = en 
}else if(lang === 'ar'){
    translatedItems = ar
}

export default translatedItems;