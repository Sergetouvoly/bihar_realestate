import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import './HousingDetails.css'


import img1 from "../../assets/images/home/photo2.jpg"
import img2 from "../../assets/images/home/house2.jpg"
import img3 from "../../assets/images/home/house1.jpg"

const HousingDetails = () => {

    return(
        <div className="housing-details-container">
          <section className="housing-details-header">
            <div className="container">
                <div className="row mb-3 justify-content-center">
                    <div className="col-xl-8 col-lg-8 col-md-9 col-sm-10 col-11">
                        <OwlCarousel dotClass="owl-housing-details-carousel-dot" className='owl-theme home-carousel' responsive= {
                            { 0: {
                                    items: 1,
                                },
                                600: {
                                    items: 1,
                                },
                                1000: {
                                    items: 1,
                                },
                            }}  center autoplay lazyLoad loop margin={10} >
                                
                            <img alt="housing" className="img-fluid item" src={img1} />
                            <img  alt="housing" className="img-fluid item" src={img2} />
                            <img  alt="housing" className="img-fluid item" src={img3} />
                         </OwlCarousel>
                    </div>
                </div>
                <div className="row py-5 justify-content-center housing-details-infos">
                    <div className="col-md-4 col-11">
                        <p className="text-capitalize">
                        <i className="fa-solid fa-money-bill-wave me-2 me-md-3"></i>
                            prix logement
                        </p>
                        <div className="">
                                <h2 className="float-end me-md-5 w-auto px-3 py-2 text-uppercase bg-white " >
                                    300 000 f cfa
                                </h2>
                        </div>
                    </div>
                    <div className="col-md-4 col-11">
                        <p className="text-capitalize">
                        <i className="fa-solid fa-house-chimney me-2 me-md-3"></i>
                            Type de disponibilité
                        </p>
                        <div className="">
                                <h2 className="float-end me-md-5 w-auto px-3 py-2 text-capitalize bg-white " >
                                    en location
                                </h2>
                        </div>
                    </div>
                    <div className="col-md-4 col-11">
                        <p className="text-capitalize">
                        <i className="fa-solid fa-location-dot me-2 me-md-3"></i>
                            lieu
                        </p>
                        <div className="">
                                <h2 className="float-end me-md-5 px-3 py-2 w-auto bg-white text-capitalize " >
                                    Cocody
                                </h2>
                        </div>
                    </div>
                </div>
            </div>
          </section>
          <section className="housing-details-description-section">
            <div className="container">
                <div className="title-description-container py-3">
                    <h1>
                        description du logement
                    </h1>
                </div>
                <div className="ps-5 pt-3 pb-5">
                    <p className="bg-white w-auto pb-md-5 pb-3 px-3 pt-3 " >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
            </div>
          </section>
          
          <section className="housing-details-responsable-section">
            <div className="container">
                <div className="title-responsable-container py-3">
                    <h1>
                    responsable du logement
                    </h1>
                </div>
                <div className="row ps-5 pb-3 justify-content-center">
                   <div className="col-md-3">
                        <img  alt="responsable" className="img-fluid item" src={img3} />
                   </div>
                   <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-4 col-11">
                                <p className="text-capitalize">
                        
                                    Nom
                                </p>
                                <div className="">
                                        <h5 className="me-md-5 w-auto px-3 py-2 text-capitalize fw-bold " >
                                        Traoré Fatim
                                        </h5>
                                </div>
                            </div>
                            <div className="col-md-4 col-11">
                                <p className="text-capitalize">
                               
                                    Email
                                </p>
                                <div className="">
                                        <h5 className="me-md-5 w-auto px-3 py-2 text-capitalize fw-bold " >
                                        traorefatim@gmail.com
                                        </h5>
                                </div>
                            </div>
                            <div className="col-md-4 col-11">
                                <p className="text-capitalize">
                              
                                    Contacts
                                </p>
                                <div className="">
                                        <h5 className="me-md-5 w-auto px-3 py-2 text-capitalize fw-bold " >
                                        +225 05 04 050 607
                                        </h5>
                                </div>
                            </div>

                        </div>
                   </div>
                </div>
            </div>
          </section>
          

        </div>

        )
}

export default HousingDetails;