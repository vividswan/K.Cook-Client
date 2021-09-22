import React from 'react';
import '../styles/main/MainAd.scss';
import adimg from '../../assets/main-ad.png';

function MainAd (){
    return(
        <div className="main-ad">
            <img src={adimg} alt="advertise image"/>
        </div>
    )
}


export default MainAd;