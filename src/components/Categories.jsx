import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, title }) => (
    <div className="categories">
        <h2>{title}</h2>
        <hr></hr>
        {children}
    </div>
);

export default Categories;