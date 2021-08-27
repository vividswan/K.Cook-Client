import React from 'react';
import '../components/styles/MainCake.scss'
import '/Users/mac/Kyilee/projects/kcook/src/components/styles/MainRecommend.scss';

import SectionTitle from '../components/SectionTitle';
import WidthwiseCard from '../components/WidthwiseCard';

function MainCake (){
    return(
        <div className="main-cake">
            <div className="recommend-header">
                <SectionTitle title="케이크"/>
            </div>
            <div className="cake-contents">
                <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200} />
                <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
            </div>
        </div>
    )
}


export default MainCake;