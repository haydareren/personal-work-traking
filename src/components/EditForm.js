import Form from 'react-bootstrap/Form'
import {Button} from "react-bootstrap";
import React,{useState} from 'react';
import {WorkContext} from "../context/WorkContext";
import {useContext} from "react";
const EditForm = ({theWork}) => {
    const {updateWorkFunc} = useContext(WorkContext);


    const work= theWork;
    const id = work.id;
    const [name, setName] = useState(work.name);
    const [priority, setPriority] = useState(work.priority);
    const updateWork = {id,name,priority};
    const handleSubmit = (e) => {
        e.preventDefault()
        updateWorkFunc(id,updateWork);
    }
    return(
        <Form  onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control value={name.substring(0, 255)} onChange={e =>setName(e.target.value)}  as="textarea" rows={2}  placeholder="Name" disabled/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Priority</Form.Label>
                <Form.Select value={priority} onChange={e => {
                    setPriority(e.target.value);
                }} aria-label="Default select example" isInvalid={priority == '' ? true : false}>
                    <option value="">Choose</option>
                    <option value="Urgent">Urgent</option>
                    <option value="Regular">Regular</option>
                    <option value="Trivial">Trivial</option>
                </Form.Select>
            </Form.Group>
            <Button style={{marginTop:15}} variant="danger" type="submit" >
                Save
            </Button>
        </Form>
    )

}
export default EditForm;
