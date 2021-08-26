import React from 'react';
import '../components/styles/MainUpdate.scss'
import '/Users/mac/Kyilee/projects/kcook/src/components/styles/MainRecommend.scss';
import VerticalCard from '../components/VerticalCard';
import SectionTitle from '../components/SectionTitle';



function MainUpdate (){
    return(
        <div className="recommend">
            <div className="recommend-header">
                <SectionTitle title="최근 업데이트"/>
            </div>
            <div className="recommend-contents">
                <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
            </div>
        </div>
    )
}


export default MainUpdate;