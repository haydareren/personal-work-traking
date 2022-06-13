import {createContext,useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export const WorkContext = createContext();

const WorkContextProvider = (props)=>{
    const [works,setWorks] = useState([
        {id: uuidv4(), name: 'adaylarla ilgili teknik bir odev hazirlanmasi gerekiyoreee', priority: 'Urgent'},
    ]);
    const addWorkFunc = (name,priority) =>{
        setWorks([...works, {id: uuidv4(), name: name, priority: priority}]);
    }
    const deleteWorkFunc = (id) =>{
        setWorks(works.filter(work => work.id !== id));
    }
    const updateWorkFunc = (id,updateWork) =>{
        setWorks(works.map(work => work.id === id ? updateWork : work));
    }
    return(
<WorkContext.Provider value={{works,addWorkFunc,deleteWorkFunc,updateWorkFunc}}>
    {props.children}
</WorkContext.Provider>
    )
}
export default WorkContextProvider;
