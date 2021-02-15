import React, { useEffect, useState } from 'react';
import UserCart from '../../Components/UserCart/UserCart';
import UserData from '../../Components/UserData/UserData';
import { IsEnglish } from '../../Components/Utils/IsEnglish';
import Layout from '../../HOC/Layout/Layout';

import "./OurServises.scss"

const OurServises = () => {
   const [isEnglish,setIsEnglish] = useState(true);
   useEffect(()=>{
      if(localStorage.getItem('forlanso_language') === "en" || undefined){
          setIsEnglish(true)
      }else{
          setIsEnglish(false)
      }
   },[])
    return (
        <Layout>
           <div className="profile_title">Freelancer Profile</div>
           <div className={`services_container ${!IsEnglish ? "reverse_to_arabic":""}`}> 
           <div className="cart--container "> 
                 <UserCart />
              </div>
              <div className="data--container">
                 <UserData />
            </div>
           </div>  
        </Layout>
    );
};

export default OurServises;