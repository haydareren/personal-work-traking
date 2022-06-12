import {createContext,useState} from "react";


export const WorkContext = createContext();

const WorkContextProvider = (props)=>{
    const [works] = useState([
        {id: 1, name: 'adaylarla ilgili teknik bir odev hazirlanmasi gerekiyoreee', priority: 'Acil'},
    ]);
    return(
<WorkContext.Provider value={{works}}>
    {props.children}
</WorkContext.Provider>
    )
}
export default WorkContextProvider;
