import Work from './Work';
import React, {useContext, useEffect} from 'react';
import {WorkContext} from "../context/WorkContext";
import {Button, Modal} from "react-bootstrap";
import AddWork from "./AddWork";


const WorkList = () => {
const {works} = useContext(WorkContext);
const [show, setShow] = React.useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
useEffect(()=>{
    handleClose()
},[works]);
    return (
        <>
        <div className="table-title">
            <div className="row">
                <div className="col-sm-6">
                    <h2>Job <b>List</b></h2>
                </div>
                <div className="col-sm-6">
                    <Button onClick={handleShow} className="btn btn-success text-white" data-toggle="modal"><i
                        className="material-icons">&#xE147;</i> <span>Create New Job</span></Button>
                </div>
            </div>
        </div>
        <table className="table table-hover">
            <thead>
            <tr>
                <th>Name</th>
                <th>Priority</th>
                <th>Actions</th>
            </tr>
            </thead>
              <tbody>
              {works.map((work)=>(
                  <tr key={work.id}>
                      <Work work={work}/>
                  </tr>
              ))}
              </tbody>
        </table>
            <Modal show={show}>
                <Modal.Header className='modal-header'>
                    <Modal.Title>Create New Job</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddWork/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant="secondary">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default WorkList;
