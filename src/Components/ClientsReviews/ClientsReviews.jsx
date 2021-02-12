import React from 'react';
import UnderLine from '../UnderLine/UnderLine';
import { Reviews } from '../Utils/data';

import "./ClientsReviews.scss"

const ClientsReviews = () => {
    return (
        <div className="reviews-container">
           <div className="title">
               <span className="active">
               Reviews
               </span>
               <UnderLine />
            </div> 
           <div className="review_container">
           {Reviews.map(review=>(
               <>
               <div className="review_header">
                  <div className="client">
                    <div className="client_img">
                      <img src={review.client.image} alt="client"/>    
                    </div> 
                    <div className="client_name">{review.client.name}</div>
                    <div className="review_time">{review.client.at_time}</div>
                  </div>
                  <div className="work_rate">5</div>
               </div>
               <div className="review_text">
                   <p>
                       {review.review_comment}
                   </p>
               </div>
               </>
           ))}
           </div>
        </div>
    );
};

export default ClientsReviews;