import React from 'react';
import './styles/WidthwiseCard.scss';
import './styles/LengthwiseCard.scss';
import cake1 from '../assets/cake1.png';
import cake2 from '../assets/cake2.png';
import cake3 from '../assets/cake3.png';
import cake4 from '../assets/cake4.png';
import emptystar from '../assets/empty-star.svg';
import fillstar from '../assets/fill-star.svg';


interface LengthwiseCardProps {
    img? : string,
    star? : number,
    shop : string,
    cakename : string ,
    minprice : number
    review? : number,
}

function WidthwiseCard({ star, shop, cakename, minprice}: LengthwiseCardProps) { 
    return (
        <div className="widthwise-card">
            <div className="widthwise-card-img">
                <img src={cake2} alt="cake-image" />
            </div>
            <div className="widthwise-card-info">
                <div className="card-rating-star">
                    <img src={fillstar} alt="lating-star" />
                    <img src={fillstar} alt="lating-star" />
                    <img src={fillstar} alt="lating-star" />
                    <img src={emptystar} alt="lating-star" />
                    <img src={emptystar} alt="lating-star" />
                </div>
                <div className="card-shop-name">
                    {shop}
                </div>
                <div className="card-cake-name">
                    {cakename}
                </div>
                <div className="card-minprice">
                    {minprice+"~"}
                </div>
                <div className="card-review">
                    리뷰 27
                </div>
            </div>
        </div>
    );
}

export default WidthwiseCard;