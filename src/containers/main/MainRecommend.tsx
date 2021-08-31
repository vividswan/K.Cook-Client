import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Url } from 'url';
import '/Users/mac/Kyilee/projects/kcook/src/components/styles/MainRecommend.scss';
import VerticalCard from '../../components/LengthwiseCard';
import SectionTitle from '../../components/SectionTitle';


function Recommend (){
    return(
        <div className="recommend">
            <div className="recommend-header">
                <SectionTitle title="오늘의 추천"/>
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


export default Recommend;