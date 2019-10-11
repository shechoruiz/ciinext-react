import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import iconInformation from '../assets/static/icon-information.png'
import iconPlay from '../assets/static/icon-play.png'

const CarouselItem = () => (
    <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/2866076/pexels-photo-2866076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Img 1"/>
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details-icon" src={iconInformation} alt="Icono información"/>
                <img className="carousel-item__details-icon" src={iconPlay} alt="Icono play"/>
            </div>
            <p className="carousel-item__details--title">Titulo descriptivo</p>
            <p className="carousel-item__details--subtitle">2019 +16 114 minutos</p>
        </div>
    </div>
);

export default CarouselItem;