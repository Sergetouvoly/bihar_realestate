import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import CardHousing from '../../components/card-housing/CardHousing';
import './Housing.css'

import img1 from "../../assets/images/home/photo2.jpg"
import img2 from "../../assets/images/home/house2.jpg"
import img3 from "../../assets/images/home/house1.jpg"


const Housing = () => {

    return(
        <div className="housing-container">
            <section className="housing-section-header">
                <div className="container">
                    <Form>
                        <div className="row justify-content-around">
                            <div className="col-md-5 px-0 col-sm-4 col-10">
                                <Form.Select size="lg"  aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                            <div className="col-md-5 col-sm-4 col-10  px-0">
                                <Form.Select  size="lg"  aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                            {/* <div className="col-md-2 col-sm-4 col-10"> */}
                                <Button className="col-md-2 col-sm-4 col-10" style={{display:'block'}} size="lg"  variant="warning" type="submit">
                                    Submit
                                </Button>
                            {/* </div> */}
                        </div>
                    </Form>
                </div>
            </section>
            <section className="housing-section-content">
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
                <div className="housing-list-section">
                    <div className="container py-5">
                        <div className="row justify-content-center align-items-center">

                            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-6 col-10 my-4">
                                <CardHousing img1={img1} />
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-6 col-10">
                                <CardHousing img1={img2} />
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-6 col-10">
                                <CardHousing img1={img3} />
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-6 col-10">
                                <CardHousing img1={img1} />
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-6 col-10">
                                <CardHousing img1={img2} />
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-6 col-10">
                                <CardHousing img1={img3} />
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </div>

        )
}

export default Housing;