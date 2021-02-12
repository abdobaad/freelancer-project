import work1 from "../../resources/work1.jpg";
import work2 from "../../resources/work2.jpg";
import work3 from "../../resources/work3.jpg";
import service from "../../resources/services.jpg";
import image from "../../resources/image.jpg";
import Calendar from "../../resources/icons/calendar.svg";
import TimeIcon from "../../resources/icons/time.svg";
import ChronometerIcon from "../../resources/icons/chronometer.svg"
import LanguageIcon from "../../resources/icons/text.svg"

export const Navebar_items = [{name:"About us",path:"/about"},{name:"services",path:"/services"},{name:"freelancers",path:"/freelancers"},{name:"how it works",path:"/how_it_works"}]
export const Filtering_data = [{name:"design"},{name:"marketing"},{name:"development"},{name:"writing"},{name:"video & Animation"},]


export const UserCart_Data = {firstname:"tamara",lastname:"jaber",rates:5,country:"palestine",job:"Ux/Ui Designer",member_date:"6 Monthes",responce_time:"3 Hours",last_present:"1 Day", languages:["Arabic-عربي","English"]}
export const additional_userData = [{title:"member since",icon:Calendar},{title:"response time",icon:TimeIcon},{title:"last activity",icon:ChronometerIcon},{title:"language",icon:LanguageIcon}]
export const additional_info = ["6 Monthes","3 Hours","1 day",['عربي',"English"]]
export const User_exp = {earn:50,sold:5,working_on:5}
export const UserData_Navigation = ["About","Portfolio","Servecies","Review"]
export const User_data = {
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    skills:["design","development","Ui/Ux","translate","writing"],
    portfolio:[{
        image:work1,
        title:"work title"
    },
    {
        image:work2,
        title:"work title"
    },
    {
        image:work3,
        title:"work title"
    }],
    services:[
    {
        image:service,
        freelancer:{
            name:"Tamara Jaber",
            job:"Graphic designer",
            image
        },
        description:"I will design a premium fashon logo with unlimited revisions",
        price:20,
        sold:200,
        stars:5
    },
    {
        image:service,
        freelancer:{
            name:"Tamara Jaber",
            job:"Graphic designer",
            image
        },
        description:"I will design a premium fashon logo with unlimited revisions",
        price:50,
        sold:300,
        stars:4
    },
    {
        image:service,
        freelancer:{
            name:"Tamara Jaber",
            job:"Graphic designer",
            image
        },
        description:"I will design a premium fashon logo with unlimited revisions",
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
          at_time:"3 Days ago",
          image
      },
      review_stars:5,
      review_comment:"the best uiux designer I've worked with and she can convert any idea to a good special app,she's professional and she is providing unique work"
  },
  {
    client:{
        name:"Ahmed Awad",
        at_time:"3 Days ago",
        image
    },
    review_stars:5,
    review_comment:"the best uiux designer I've worked with and she can convert any idea to a good special app,she's professional and she is providing unique work"
},
]

export const Footer_data = [
   {
        title:"categories",
        elements:[{
            name:"Programing"
        },
        {
            name:"Marketing"
        },
        {
            name:"Graphic & Design"
        },
        {
            name:"Writing"
        },
        {
            name:"business"},]
    
    },
   {
        title:"company",
        elements:[
            {name:"About Forlanso"},
            {name:"How it works"},
            {name:"Blog"},
            {name:"info@forlanso.com"},
        ]}
        
    ,
    {
    
        title:"support",
        elements: [
            {name:"Customer support"},
            {name:"Contact us"}   
           ]}
    ,
    {
       
            title:"terms",
            elements: [
                {name:"Know you rights"},
                {name:"Fees & Payments"},
                {name:"Publishing & Content"},      
               ]
        },
       {
       
            title:"legal",
            elements: [
                {name:"Privacy policy"},
                {name:"Terms & Conditions"}   
               ]
       }
]

