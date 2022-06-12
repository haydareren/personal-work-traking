import Work from './Work';
import React,{useContext} from 'react';
import {WorkContext} from "../context/WorkContext";


const WorkList = () => {
const {works} = useContext(WorkContext);
    return (
        <table className="table table-striped table-hover">
            <thead>
            <tr>
                <th>Name</th>
                <th>Priority</th>
                <th>Actions</th>
            </tr>
            </thead>
              <tbody>
                <Work works={works}/>
              </tbody>
        </table>
    )
}
export default WorkList;
