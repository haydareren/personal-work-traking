const Work = ({works}) => {
   const backgroundcolor=(priority) =>{
         if(priority === 'Acil'){
              return 'red'
         }
         if(priority === 'Önemli>'){
              return 'orange'
         }
         if(priority === 'Normal'){
              return 'darkblue'
         }
    }
  return(
      <>
      {works.map((work) => (
              <tr key={work.id}>
                  <td>{work.name}</td>
                  <td style={{color:backgroundcolor(work.priority)}}>{work.priority}</td>
                  <td>
                      <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                      <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                  </td>
              </tr>
          ))
      }
      </>
  )
}
export default Work;
