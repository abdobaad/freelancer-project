import React, { useEffect, useState } from 'react';
import RatesStars from '../RatesStars/RatesStars';
import UnderLine from '../UnderLine/UnderLine';
import { UpperCaseFirstLetter } from '../Utils/capitlize';
import { Reviews } from '../Utils/data';
import { TranslateText } from '../Utils/TranslateText';
import { IsEnglish } from '../Utils/IsEnglish';


import "./ClientsReviews.scss"
import ClientInfo from './ClientInfo/ClientInfo';

const ClientsReviews = () => {
    return (
        <div className="reviews-container">
           <div className={`title  ${!IsEnglish ? 'column-from_right' : ''}`}>
               <p className="active">
               {
                            IsEnglish ? UpperCaseFirstLetter("reviews") : TranslateText(UpperCaseFirstLetter("reviews"))
                  }
               </p>
               <UnderLine enWidth="4.7rem" arWidth="3.5rem" />
            </div> 
           <div className="review_container">
           {Reviews.map((review,i)=>(
               <div className="mg_bottom" key={`review--${i}`}>
               <div  className="review_header">
                  {IsEnglish ? 
                            <>
                              <ClientInfo review={review} />
                              <div className="work_rate">
                                <RatesStars stars={review.review_stars} />
                              </div>
                            </> 
                            : 
                            <>
                              <div className="work_rate">
                                <RatesStars stars={review.review_stars} />
                              </div>
                              <ClientInfo review={review} />
                            </>
                            }
               </div>
               <div className="review_text">
                   <p className={`${IsEnglish ?'en' : 'ar text_to_end'}`}>
                       {review.review_comment}
                   </p>
               </div>
               </div>
           ))}
           </div>
        </div>
    );
};

export default ClientsReviews;