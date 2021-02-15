import React from 'react';
import { IsEnglish } from '../../Utils/IsEnglish';

const ClientInfo = ({review}) => {
    return (
        <div className="client">
                    {IsEnglish ?
                    <>
                    <div className="client_img">
                      <img src={review.client.image} alt="client"/>    
                    </div> 
                    <div className="client_name">{review.client.name}</div>
                    <div className="review_time">{review.client.at_time}</div>
                    </>
                     :
                     <>
                       <div className="review_time">{review.client.at_time}</div>
                       <div style={{marginRight:"0",marginLeft:"10px"}} className="client_name">{review.client.name}</div>
                     <div style={{marginRight:"0",marginLeft:"calc(50px - 2rem)"}} className="client_img">
                      <img src={review.client.image} alt="client"/>    
                    </div> 
                   
                  
                     </>
                     }
        </div>
    );
};

export default ClientInfo;