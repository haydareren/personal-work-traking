import {WorkContext} from "../context/WorkContext";
import {useContext} from "react";
import {Button, Modal} from "react-bootstrap";
import React from "react";
import EditForm from "./EditForm";
import {useEffect} from "react";
const Work = ({work}) => {
const {deleteWorkFunc} = useContext(WorkContext);
const [show, setShow] = React.useState(false);
const [showtwo, setShowTwo] = React.useState(false);
const [a,setA] = React.useState('');
   const backgroundcolor=(priority) =>{
         if(priority == 'Urgent'){
              return 'red'
         }
         if(priority == 'Regular'){
              return 'orange'
         }
         if(priority == 'Trivial'){
              return 'darkblue'
         }
    }
    const handleShow = async (id) =>{
       await setShow(true)
        await setA(id)
    }
    const handleDelete = (a) =>{
        deleteWorkFunc(a)
        setShow(false)
    }
    useEffect(()=>{
        setShowTwo(false)
    },[work]);
  return(
      <>

          <td>{work.name}</td>
          <td style={{color: backgroundcolor(work.priority)}}>{work.priority}</td>
          <td>
              <button onClick={()=>setShowTwo(true)} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons"
                                                                                  data-toggle="tooltip"
                                                                                  title="Edit">&#xE254;</i></button>
              <button onClick={() => handleShow(work.id)} className="btn text-danger btn-act" data-toggle="modal"><i
                  className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
          </td>

          <Modal fullscreen={'lg-down'} show={show}>
              <Modal.Header className='modal-header'>
                  <Modal.Title>Are you sure you want to delete it ?</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Button onClick={() => setShow(false)} variant="secondary">
                      Cancel
                  </Button>
                  <Button onClick={() => handleDelete(a)} style={{marginLeft: 120}} variant="danger">
                      Approve
                  </Button>
              </Modal.Body>

          </Modal>

          <Modal fullscreen={'lg-down'} show={showtwo}>
              <Modal.Header className='modal-header'>
                  <Modal.Title>Job Edit</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <EditForm theWork={work}/>
              </Modal.Body>
              <Modal.Footer>
                  <Button onClick={() => setShowTwo(false)} variant="secondary">
                      Cancel
                  </Button>
              </Modal.Footer>
          </Modal>
      </>
  )
}
export default Work;
