import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardHousing.css'


const CardHousing = (props)=>{
  return (
    <div className="item">
        <Card className="card-housing" style={{border:"none",background:"#fff"}} >

        <Card.Img className="img-fluid" alt="housing" variant="top" src={props.img1} />
        <Card.Body>
            <div className="card-housing-header">
                <div className="row justify-content-between">
                    <div className="col-5 card-housing-tilte-container">
                            <h4>
                                Villa
                            </h4>
                    </div>
                    <div className="col-7 card-housing-price-type-container">
                       <div className="d-flex justify-content-center flex-column align-items-end">
                        <h5>
                                200 000 f cfa
                            </h5>
                            <p >Location</p>
                       </div>
                    </div>
                </div>
            </div>
            <div className="card-housing-content py-3">
                 <p className="card-housing-text" >
                Some quick example text to build on the card title and make up the
                bulk of the card's content.d title and make up the
                bulk of the card's content.
                </p>
            </div>
            <div className="row ">
                <div className="col-6">
                    <Button variant="warning" className="card-housing-btn" >Voir Plus</Button>

                </div>
                <div className="col-6">
                    <div className="d-flex justify-content-end align-items-center fw-bolder">
                    <p className="fw-bolder" >
                        <i className="fa-solid fa-location-dot me-md-3 m-1"></i>
                        Cocody</p>
                    </div>

                </div>

            </div>
        </Card.Body>
        </Card>
    </div>
  );
}

export default CardHousing;