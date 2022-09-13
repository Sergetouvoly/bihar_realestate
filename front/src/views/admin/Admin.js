import React, { useEffect, useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import TablesComponents from "../../components/tables/TablesComponents";

import './Admin.css'

const ModalAddHousing =(props)=>{
    return(
        <Modal show={props.housingModalShow} onHide={props.HousinghandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enregistrement d'un logement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 col-sm-6 col-11">
        <Form.Group className="mb-3" controlId="titre">
            <Form.Label>Tyle Logement</Form.Label>
            <Form.Select aria-label="Default select example">
            <option>Type de Logement</option>
            <option value="Location">Location</option>
            <option value="Vente">Vente</option>
            </Form.Select>

        </Form.Group>

                </div>
                <div className="col-md-6 col-sm-6 col-11">
            <Form.Group className="mb-3" controlId="titre">
                <Form.Label>Titre</Form.Label>
                <Form.Control type="text" placeholder="Titre" />
            </Form.Group>

                </div>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 col-sm-6 col-11">
            <Form.Group className="mb-3" controlId="prix">
                <Form.Label>Prix du Logement</Form.Label>
                <Form.Control type="text" placeholder="Entrer le prix" />
            </Form.Group>

                </div>
                <div className="col-md-6 col-sm-6 col-11">
            <Form.Group className="mb-3" controlId="titre">
                <Form.Label>Lieu</Form.Label>
                <Form.Control type="text" placeholder="Entrer le Lieu" />
            </Form.Group>

                </div>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description du Logement</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <p>Information Propriétaires</p>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-4 col-sm-6 col-11">
            <Form.Group className="mb-3" controlId="nom">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" placeholder="Entrer le nom" />
            </Form.Group>

                </div>
                <div className="col-md-4 col-sm-6 col-11">

                <Form.Group className="mb-3" controlId="prenom">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le Prenom" />
                </Form.Group>

                </div>
                <div className="col-md-4 col-sm-6 col-11">
                <Form.Group className="mb-3" controlId="contact">
                    <Form.Label>Numéro</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le Numéro" />
                </Form.Group>
                </div>
            </div>
           

            <Button variant="primary" type="submit">
                Enregistrer
            </Button>
        </Form>
        </Modal.Body>
      </Modal>
    )
}

const ModalAddHousingEye =(props)=>{
    return(
        <Modal show={props.housingModalShowEye} onHide={props.HousinghandleCloseEye}>
        <Modal.Header closeButton>
          <Modal.Title>Visualisation logement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 col-sm-6 col-11">
        <Form.Group className="mb-3" controlId="titre">
            <Form.Label>Tyle Logement</Form.Label>
            <Form.Select aria-label="Default select example">
            <option>Type de Logement</option>
            <option value="Location">Location</option>
            <option value="Vente">Vente</option>
            </Form.Select>

        </Form.Group>

                </div>
                <div className="col-md-6 col-sm-6 col-11">
            <Form.Group className="mb-3" controlId="titre">
                <Form.Label>Titre</Form.Label>
                <Form.Control type="text" placeholder="Titre" />
            </Form.Group>

                </div>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 col-sm-6 col-11">
            <Form.Group className="mb-3" controlId="prix">
                <Form.Label>Prix du Logement</Form.Label>
                <Form.Control type="text" placeholder="Entrer le prix" />
            </Form.Group>

                </div>
                <div className="col-md-6 col-sm-6 col-11">
            <Form.Group className="mb-3" controlId="titre">
                <Form.Label>Lieu</Form.Label>
                <Form.Control type="text" placeholder="Entrer le Lieu" />
            </Form.Group>

                </div>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description du Logement</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <p>Information Propriétaires</p>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-4 col-sm-6 col-11">
            <Form.Group className="mb-3" controlId="nom">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" placeholder="Entrer le nom" />
            </Form.Group>

                </div>
                <div className="col-md-4 col-sm-6 col-11">

                <Form.Group className="mb-3" controlId="prenom">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le Prenom" />
                </Form.Group>

                </div>
                <div className="col-md-4 col-sm-6 col-11">
                <Form.Group className="mb-3" controlId="contact">
                    <Form.Label>Numéro</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le Numéro" />
                </Form.Group>
                </div>
            </div>
           
        </Form>
        </Modal.Body>
      </Modal>
    )
}


const ModalAddHousingUpdate =(props)=>{
    return(
        <Modal  dialogClassName="modal-90w" show={props.housingModalShowUpdate} onHide={props.HousinghandleCloseUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Mise a jour d'un logement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 col-sm-6 col-11">
        <Form.Group className="mb-3" controlId="titre">
            <Form.Label>Tyle Logement</Form.Label>
            <Form.Select aria-label="Default select example">
            <option>Type de Logement</option>
            <option value="Location">Location</option>
            <option value="Vente">Vente</option>
            </Form.Select>

        </Form.Group>

                </div>
                <div className="col-md-6 col-sm-6 col-11">
            <Form.Group className="mb-3" controlId="titre">
                <Form.Label>Titre</Form.Label>
                <Form.Control type="text" placeholder="Titre" />
            </Form.Group>

                </div>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 col-sm-6 col-11">
            <Form.Group className="mb-3" controlId="prix">
                <Form.Label>Prix du Logement</Form.Label>
                <Form.Control type="text" placeholder="Entrer le prix" />
            </Form.Group>

                </div>
                <div className="col-md-6 col-sm-6 col-11">
            <Form.Group className="mb-3" controlId="titre">
                <Form.Label>Lieu</Form.Label>
                <Form.Control type="text" placeholder="Entrer le Lieu" />
            </Form.Group>

                </div>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description du Logement</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <p>Information Propriétaires</p>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-4 col-sm-6 col-11">
            <Form.Group className="mb-3" controlId="nom">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" placeholder="Entrer le nom" />
            </Form.Group>

                </div>
                <div className="col-md-4 col-sm-6 col-11">

                <Form.Group className="mb-3" controlId="prenom">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le Prenom" />
                </Form.Group>

                </div>
                <div className="col-md-4 col-sm-6 col-11">
                <Form.Group className="mb-3" controlId="contact">
                    <Form.Label>Numéro</Form.Label>
                    <Form.Control type="text" placeholder="Entrer le Numéro" />
                </Form.Group>
                </div>
            </div>
           

            <Button variant="primary" type="submit">
                Enregistrer
            </Button>
        </Form>
        </Modal.Body>
      </Modal>
    )
}



const Admin = ()=>{

    const [dataTableHead,setDataTableHead] = useState([])
    const [dataTableBody,setDataTableBody] = useState([])
    const [housingModalShow, setHousingModalShow] = useState(false);
    const [housingModalShowEye, setHousingModalShowEye] = useState(false);
    const [housingModalShowUpdate, setHousingModalShowUpdate] = useState(false);
  
    const HousinghandleClose = () => setHousingModalShow(false);
    const HousinghandleShow = () => setHousingModalShow(true);
    
    const HousinghandleCloseEye = () => setHousingModalShowEye(false);
    const HousinghandleShowEye = () => setHousingModalShowEye(true);

    const HousinghandleCloseUpdate = () => setHousingModalShowUpdate(false);
    const HousinghandleShowUpdate = () => setHousingModalShowUpdate(true);

    useEffect(()=>{
        const header = ["id","titre","prix","description"]
        const body = [
            {
                id:1,
                titre:"villa",
                prix:"100 000",
                description: "une petite description"
            },
            {
                id:2,
                titre:"villa",
                prix:"100 000",
                description: "une petite description"
            },
            {
                id:3,
                titre:"villa",
                prix:"100 000",
                description: "une petite description"
            }
        ]
        setDataTableHead(header)
        setDataTableBody(body)
    },[])

    return(
        <div className="admin-container">
            <section className="admin-tabs-section">
                <div className="container"> 
                    <Tabs
                        defaultActiveKey="logements"
                        id="justify-tab-example"
                        className="mb-3"
                        justify
                        >
                       
                        <Tab eventKey="logements" title="Logements">
                            <section className="tab-logement-section">
                                <TablesComponents
                                btnAdd={HousinghandleShow}
                                btnEye={HousinghandleShowEye}
                                btnUpdate={HousinghandleShowUpdate}
                                dataTableHead={dataTableHead}
                                dataTableBody={dataTableBody}
                                />
                            </section>
                        </Tab>
                        <Tab eventKey="proprietaires" title="Propriétaires">
                        Propriétaires
                        </Tab>
                        <Tab eventKey="clients" title="Clients Tab">
                        Clients
                        </Tab>
                    </Tabs>
                </div>
            </section>
            <ModalAddHousing 
                housingModalShow={housingModalShow}
                HousinghandleClose={HousinghandleClose}
             />
             <ModalAddHousingEye 
                 housingModalShowEye={housingModalShowEye}
                 HousinghandleCloseEye={HousinghandleCloseEye}
              />
               <ModalAddHousingUpdate 
                housingModalShowUpdate={housingModalShowUpdate}
                HousinghandleCloseUpdate={HousinghandleCloseUpdate}
             />
        </div>
        );
}
export default Admin;