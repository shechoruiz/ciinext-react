import React from 'react';
import '../assets/styles/components/Categories.scss';
import MOON_GET_Heavy from '../assets/styles/fonts/moon_get-Heavy.ttf';

const Categories = ({ children, title }) => (
    <div className="categories">
        <h2 style={{fontFamily: MOON_GET_Heavy}}>{title}</h2>
        <hr/>
        {children}
    </div>
);

export default Categories;