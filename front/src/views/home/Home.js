import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import Button from 'react-bootstrap/Button';
import './Home.css'
import CardHousing from '../../components/card-housing/CardHousing';

import img1 from "../../assets/images/home/photo2.jpg"

const Home = () => {

    return(
        <div className="home-container">
            <section className="home-section-header">
            <OwlCarousel dotClass="owl-home-carousel-dot" className='owl-theme home-carousel' responsive= {
               { 0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 1,
                },
            }}  center autoplay lazyLoad loop margin={10}  >
                
                <div className="item home-carousel-item home-carousel-item-1">
                    <div className="container-md">
                        <div className="row  align-items-center">
                            <div className="col-xl-7 col-lg-7 col-md-10 col-sm-11">
                                <div className="section-title">
                                    <h1>
                                        Restate, le meilleur service de locations et de vente de logements
                                    </h1>
                                </div>
                                <div className="section-button">
                                    <Button variant="warning">Voir les Logements</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item home-carousel-item home-carousel-item-2">
                    <div className="container-md">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-7 col-md-10 col-sm-11">
                                <div className="section-title">
                                    <h1>
                                        Restate, le meilleur service de locations et de vente de logements
                                    </h1>
                                </div>
                                <div className="section-button">
                                    <Button variant="warning">Voir les Logements</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item home-carousel-item home-carousel-item-3">
                    <div className="container-md">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-7 col-md-10 col-sm-11">
                                <div className="section-title">
                                    <h1>
                                        Restate, le meilleur service de locations et de vente de logements
                                    </h1>
                                </div>
                                <div className="section-button">
                                    <Button variant="warning">Voir les Logements</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </OwlCarousel>
            </section>
            <section className="home-section-content">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-xl-7 col-lg-7 col-md-10 col-sm-11">
                                <div className="section-title text-center">
                                    <h1>
                                    Nos Logements Disponibles
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-housing-card-content">
                        <div className="container pt-5">
                        <OwlCarousel dotClass="owl-home-carousel-dot" className='owl-theme home-carousel' responsive= {
                                    { 0: {
                                            items: 1,
                                        },
                                        600: {
                                            items: 2,
                                        },
                                        1000: {
                                            items: 3,
                                        },
                                    }} center autoplay lazyLoad loop margin={10}  >
                                <CardHousing img1={img1} />
                                <CardHousing img1={img1} />
                                <CardHousing img1={img1} />
                                <CardHousing img1={img1} />
                                <CardHousing img1={img1} />
                        </OwlCarousel>
               
                        </div>
                    </div>
            </section>
        </div>

        )
}

export default Home;