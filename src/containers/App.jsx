import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import FooterLogo from '../components/FooterLogo';
import FooterSocial from '../components/FooterSocial';
import FooterMarca from '../components/FooterMarca';

const App = () => {
    const [ videos, setVideos ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/initalState')
            .then(response => response.json())
            .then(data => setVideos(data))
    }, []);

    return (
        <div className="App">
            <Header />
            <Categories title="Lo más popular">
                <Carousel>
                    <CarouselItem />
                </Carousel>
            </Categories>
            <Categories title="Lo más nuevo">
                <Carousel>
                    <CarouselItem />
                </Carousel>
            </Categories>
            <Categories title="Series">
                <Carousel>
                    <CarouselItem />
                </Carousel>
            </Categories>
            <Categories title="Largometrajes">
                <Carousel>
                    <CarouselItem />
                </Carousel>
            </Categories>
            <Footer>
                <FooterLogo />
                <FooterSocial />
                <FooterMarca />
            </Footer>
        </div>
    )
}

export default App;