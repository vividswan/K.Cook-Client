import React from 'react';
import VerticalCard from '../components/LengthwiseCard';


function Cake (){
    return(
        <div>
            <div className="item-sort-bar">
                <div className="dropdown-bar">정렬</div>
                <div className="dropdown-bar">맛</div>
                <div className="dropdown-bar">지역</div>
                <div className="dropdown-bar">이벤트</div>
                <div className="dropdown-bar">가격대</div>
            </div>
            <div className="sorted-item">
                <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>
                <VerticalCard shop="케이크바이미" cakename="하트볼터치 곰돌이케이크" minprice={5200}/>

            </div>

        </div>
    )
}



export default Cake;