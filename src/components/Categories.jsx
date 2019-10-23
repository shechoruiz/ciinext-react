import React from 'react';
import '../assets/styles/components/Categories.scss';
import MOON_GET_Heavy from '../assets/styles/fonts/moon_get-Heavy.ttf';

const Rule = ({ color }) => (
    <hr 
        style={{
            color: color,
            backgroundColor: color,
            height: 2,
            width: "90%",
            border: 0
        }}
    />
);

const Categories = ({ children, title }) => (
    <div className="categories">
        <h2 style={{fontFamily: MOON_GET_Heavy}}>{title}</h2>
        <Rule color="#FFC20F"/>
        {children}
    </div>
);

export default Categories;