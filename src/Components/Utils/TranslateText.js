import { en ,ar} from "./translate";

export const TranslateText = word => {
    console.log(word);
    const forlanso_language = localStorage.getItem('forlanso_language');
    if(forlanso_language === "en" ||forlanso_language === undefined){
        return en[word]
    }else{
        return ar[word]
    }
}

