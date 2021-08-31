import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LengthwiseCard from '../components/LengthwiseCard';
import '/Users/mac/Kyilee/projects/kcook/src/components/styles/MainRecommend.scss';
import WidthwiseCard from '../components/WidthwiseCard';

function TodaysRec (){
    return(
        <div>
            <div className="sort-by-rec">
                <div className="title">리뷰 별점순</div>
                <div className="recommend-contents">
                    <LengthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <LengthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <LengthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <LengthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <LengthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <LengthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <LengthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                </div>
                <div className="pagination">
                    
                </div>
            </div>
            <div className="kcook-pick">
                <div className="title">리뷰 별점순</div>
                <div className="recommend-contents">
                    <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                </div>
            </div>
            <div className="famous-event">
                <div className="event-top">
                    <div className="title">이번 달 인기 이벤트</div>
                    <div className="view-all">전체 보기 &gt;</div>
                </div>
                <div className="event-contents">
                    <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                    <WidthwiseCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                </div>
            </div>
        </div>
    )
}



export default TodaysRec;



