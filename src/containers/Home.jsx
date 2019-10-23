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
import useInitialState from '../hooks/useInitialState'

const API = 'http://localhost:3000/initalState';

const Home = () => {
    const initialState = useInitialState(API);
    return (
        <>
            {initialState.mylist.length > 0 && 
                <Categories title="Lo más popular">
                    <Carousel>
                        {initialState.mylist.map(item =>
                            <CarouselItem key={item.id} {...item}/>
                        )}
                    </Carousel>
                </Categories>
            }

            <Categories title="Lo más nuevo">
                <Carousel>
                    {initialState.trends.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

            <Categories title="Series">
                <Carousel>
                    {initialState.originals.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>

            <Categories title="Largometrajes">
                <Carousel>
                    <CarouselItem />
                </Carousel>
            </Categories>
        </>
    )
}

export default Home;