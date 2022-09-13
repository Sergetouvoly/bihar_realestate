import React from "react";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './TablesComponents.css';

const DeleteModal = (props)=>{

    return(
        <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Procedure de Supression</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-5 px-5" >
            <p>Voulez-vous vraiment supprimer cet element ?</p>
            <div className="row justify-content-between align-items-center">
                
          <Button className="col-5" variant="secondary" onClick={props.handleClose}>
            Non
          </Button>
          <Button className="col-5" variant="danger" >
            Oui
          </Button>
            </div>
        </Modal.Body>
      </Modal>
    )
}

const TablesComponents= (props)=>{

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
         <div className="table-header">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 col-md-4 col-sm-6 col-11">
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    </InputGroup.Text>
                    <Form.Control
                    size="lg"
                    placeholder="Rechercher ..."
                    aria-label="Rechercher"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                </div>
                <div className="col-lg-7 col-md-8 col-sm-6 col-11">
                <button onClick={()=>props.btnAdd()} className="add-table-btn float-end" >Ajouter</button>
                </div>
            </div>
        </div>
         <Table striped className="table-component">
      <thead>
        <tr>
          {
            props?.dataTableHead.map((item,index)=> <th key={index}>{item} </th> )
          }
        </tr>
      </thead>
      <tbody>
        {
            props?.dataTableBody.map((item,index)=>{
                return(
                    <tr key={index}>
                        {
                            props.dataTableHead.map((valeur,index2)=>{
                                return(
                                    <td key={index2} >
                                       { item[valeur]}
                                    </td>
                                )
                            })
                        }
                        <td>
                            <div className="row justify-content-center align-items-center">
                                <div className="col-md-4 col-sm-4 col-11">
                                    <button onClick={()=>props.btnEye()}  style={{background:'gray',color:"#fff"}}  className="table-btn table-btn-eye" >
                                        <i className="fa-regular fa-eye"></i>
                                    </button>
                                </div>
                                <div className="col-md-4 col-sm-4 col-11">
                                    <button 
                                    onClick={() => props.btnUpdate()}
                                    style={{background:'blue',color:"#fff"}}  className="table-btn table-btn-update" >
                                    <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                </div>
                                <div className="col-md-4 col-sm-4 col-11">
                                    <button  onClick={() => handleShow()} style={{background:'red',color:"#fff"}} className="table-btn table-btn-delete" >
                                    <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                )
            })
        }

      
      </tbody>
    </Table>
    <DeleteModal show={show} handleClose={handleClose} />
        </>
    )
}

export default TablesComponents;