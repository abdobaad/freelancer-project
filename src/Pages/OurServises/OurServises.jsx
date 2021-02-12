import React from 'react';
import UserCart from '../../Components/UserCart/UserCart';
import UserData from '../../Components/UserData/UserData';
import Layout from '../../HOC/Layout/Layout';

import "./OurServises.scss"

const OurServises = () => {
    return (
        <Layout>
           <div className="services_container">
              <div className="cart--container">
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