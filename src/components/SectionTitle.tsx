import React from 'react';
import { Link } from 'react-router-dom';
import './styles/SectionTitle.scss'


interface SectionTitleProps {
    title : string,
    more? : string
}


function SectionTitle({ title}: SectionTitleProps) { 
    return (
        <div className="section-title">
            <div className="title">
                {title}
            </div>
            <Link to="/" className="link">더보기 &gt;</Link>                
        </div>
    );
}


export default SectionTitle;