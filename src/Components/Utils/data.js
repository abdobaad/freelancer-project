import work1 from "../../resources/work1.jpg";
import work2 from "../../resources/work2.jpg";
import work3 from "../../resources/work3.jpg";
import service from "../../resources/services.jpg";
import image from "../../resources/image.jpg";
import Calendar from "../../resources/icons/calendar.svg";
import TimeIcon from "../../resources/icons/time.svg";
import ChronometerIcon from "../../resources/icons/chronometer.svg"
import LanguageIcon from "../../resources/icons/text.svg";
import MoneyIcon from "../../resources/icons/hand.svg"
import RedoIcon from "../../resources/icons/redo.svg"
import PinIcon from "../../resources/icons/paper-push-pin.svg"

//translation:
import translatedItems from "../Utils/UseLanguage";



export const Navebar_items = [{name:translatedItems.AboutUs,desc:"about us",path:"/about"},{name:translatedItems.Services,desc:"services",path:"/services"},{name:translatedItems.Freelancers,desc:"freelancers",path:"/freelancers"},{name:translatedItems.HowItWorks,desc:"how it works",path:"/how_it_works"}]
export const Filtering_data = [{name:translatedItems.Design,desc:"design"},{name:translatedItems.Marketing,desc:"marketing"},{name:translatedItems.Development,desc:"development"},{name:translatedItems.Writing,desc:"writing"},{name:translatedItems.VideoAndAnimation,desc:"video & animation"},]


export const UserCart_Data = {firstname:translatedItems.FirstName,lastname:translatedItems.LastName,rates:5,country:translatedItems.Location,job:"Ux/Ui Designer",member_date:`6 ${translatedItems.Mounts}`,responce_time:`3 ${translatedItems.Hours}`,last_present:`1 ${translatedItems.Day}`, languages:["Arabic-عربي","English"]}
export const additional_userData = [{title:translatedItems.MemberSince,icon:Calendar},{title:translatedItems.RespondeTime,icon:TimeIcon},{title:translatedItems.LastActivity,icon:ChronometerIcon},{title:translatedItems.Language,icon:LanguageIcon}]
export const additional_info = [`6 ${translatedItems.Months}`, `3 ${translatedItems.Hours}`,`1 ${translatedItems.Day}`,['عربي',"English"]]
export const User_exp = {earn:50,sold:5,working_on:5}
export const UserData_Navigation = [{name:translatedItems.About,desc:'about'},{name:translatedItems.Portfolio,desc:'portfolio'},{name:translatedItems.Services,desc:'services'},{name:translatedItems.Reviews,desc:'reviews'},]
export const WorkInfo_Nav = [{name:translatedItems.Earning,icon:MoneyIcon,data:50},{name:translatedItems.OrderSold,icon:PinIcon,data:5},{name:translatedItems.OrderProgress,icon:RedoIcon,data:5}]
export const User_data = {
    description:translatedItems.AboutText,
    skills:[translatedItems.Design,translatedItems.Development,"Ui/Ux","translate",translatedItems.Writing],
    portfolio:[{
        image:work1,
        title:translatedItems.WorkTitle
    },
    {
        image:work2,
        title:translatedItems.WorkTitle
    },
    {
        image:work3,
        title:translatedItems.WorkTitle
    }],
    services:[
    {
        image:service,
        freelancer:{
            name:`${translatedItems.FirstName} ${translatedItems.LastName}`,
            job:"Graphic designer",
            image
        },
        description:translatedItems.ServiceDesc,
        price:20,
        sold:200,
        stars:5
    },
    {
        image:service,
        freelancer:{
            name:`${translatedItems.FirstName} ${translatedItems.LastName}`,
            job:"Graphic designer",
            image
        },
        description:translatedItems.ServiceDesc,
        price:50,
        sold:300,
        stars:4
    },
    {
        image:service,
        freelancer:{
            name:`${translatedItems.FirstName} ${translatedItems.LastName}`,
            job:"Graphic designer",
            image
        },
        description:translatedItems.ServiceDesc,
        price:70,
        sold:100,
        stars:5
    },
    ],
}
export const Reviews = [
  {
      client:{
          name:"Ahmed Awad",
          at_time:`${translatedItems.Since} ${translatedItems.Days} 3`,
          image
      },
      review_stars:5,
      review_comment:"the best uiux designer I've worked with and she can convert any idea to a good special app,she's professional and she is providing unique work"
  },
  {
    client:{
        name:"Ahmed Awad",
        at_time:`${translatedItems.Since} ${translatedItems.Days} 3`,
        image
    },
    review_stars:5,
    review_comment:"the best uiux designer I've worked with and she can convert any idea to a good special app,she's professional and she is providing unique work"
},
{
    client:{
        name:"Ahmed Awad",
        at_time:`${translatedItems.Since} ${translatedItems.Days} 3`,
        image
    },
    review_stars:5,
    review_comment:"the best uiux designer I've worked with and she can convert any idea to a good special app,she's professional and she is providing unique work"
},
]

///
//////////***FOOTER
//////// */
export const Footer_data = [
    
   {
        title:translatedItems.Categories,
        elements:[{
            name:translatedItems.Development
        },
        {
            name:translatedItems.Marketing
        },
        {
            name:"Graphic & Design"
        },
        {
            name:translatedItems.Writing
        },
        {
            name:translatedItems.Business},]
    
    },
   {
        title:translatedItems.Company,
        elements:[
            {name:translatedItems.AboutForlanso},
            {name:translatedItems.HowItWorks},
            {name:translatedItems.Blog},
            {name:"info@forlanso.com"},
        ]}
        
    ,
    {
    
        title:translatedItems.Support,
        elements: [
            {name:translatedItems.CustomerSupport},
            {name:translatedItems.ContactUs}   
           ]}
    ,
    {
       
            title:translatedItems.Terms,
            elements: [
                {name:translatedItems.KnowYourRights},
                {name:translatedItems.FeesAndPayments},
                {name:translatedItems.PublishingAndContent},      
               ]
        },
       {
       
            title:translatedItems.Legal,
            elements: [
                {name:translatedItems.PrivacyPolicy},
                {name:translatedItems.TermsAndConditions}   
               ]
       }
]

