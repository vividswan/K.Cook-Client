import React from 'react';
import '../styles/mypage/Membership.scss';

function Reserves (){
    return(

        <div className="mp-top product-review">
            <div className="mypage-top">
                <h3>적립금</h3>
                <span>구매 및 후기 작성으로 현금처럼 쓸 수 있는 포인트를 받으세요</span>
                <div className="membership">합계 : 
                    <span className="membership-point">11,600원</span>
                </div>
            </div>
            <table className="membership-table">
                <thead className="membership-head">
                    <tr>
                        <th>상품명</th>
                        <th>판매자</th>
                        <th>날짜</th>
                        <th>가격</th>
                        <th>적립금</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>하트볼터치 곰돌이 케이크</td>
                        <td>원모먼트</td>
                        <td>2021. 03. 11</td>
                        <td>29,000</td>
                        <td>2,900원</td>
                    </tr>
                    <tr>
                        <td>하트볼터치 곰돌이 케이크</td>
                        <td>원모먼트</td>
                        <td>2021. 03. 11</td>
                        <td>29,000</td>
                        <td>2,900원</td>
                    </tr>
                    <tr>
                        <td>하트볼터치 곰돌이 케이크</td>
                        <td>원모먼트</td>
                        <td>2021. 03. 11</td>
                        <td>29,000</td>
                        <td>2,900원</td>
                    </tr>
                    <tr>
                        <td>하트볼터치 곰돌이 케이크</td>
                        <td>원모먼트</td>
                        <td>2021. 03. 11</td>
                        <td>29,000</td>
                        <td>2,900원</td>
                    </tr>
                </tbody>

            </table>

            </div>
                
        
    )
   
}


export default Reserves;