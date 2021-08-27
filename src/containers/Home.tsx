import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import MainCrousel from '../components/Crousel';
import MainRecommend from './MainRecommend';
import MainCake from './MainCake';
import MainAd from '../components/MainAd';
import MainUpdate from './MainUpdate';



function Home (){
    return(
    <Router>
        <MainCrousel/>
        <MainRecommend/>
        <MainCake/>
        <MainAd/>
        <MainUpdate/>
    </Router>   
    )
}



export default Home;