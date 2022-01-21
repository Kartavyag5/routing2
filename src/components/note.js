import React, {useState } from "react";

export default function Note(props) {

    const [isEditing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(props.title);
    const [newDescription, setNewDescription] = useState(props.description);
    

    function handleEditing(e){
      e.preventDefault();
      props.editNote(props.id, newTitle, newDescription);
      setNewTitle('');
      setNewDescription('');
      setEditing(false);
    }

    const editingTemplate = (
        <div>
          <form onSubmit={handleEditing}>
            <div className="form-group m-2">
              <label for="exampleInputName1">Title</label>
              <input type="text" className="form-control" name='title' onChange={(e)=>setNewTitle(e.target.value)} value={newTitle} id="exampleInputTitle1" aria-describedby="nameHelp" placeholder="Enter Title" />
            </div>
            <div className="form-group m-2">
              <label for="exampleInputDescription1">Description</label>
              <input type="text" className="form-control" name='description' onChange={(e)=>setNewDescription(e.target.value)} value={newDescription} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Description" />
            </div>
          <button type="submit" className="btn btn-success m-2">Save</button>
          <button type="button" className="btn btn-warning" onClick={() => setEditing(false)}>Cancel</button>
        </form>
      </div>
      );

    // const editingTemplate = (
    //   <form className="stack-small" onSubmit={handleSubmit}>
    //     <div className="form-group">
    //       <label className="todo-label" htmlFor={props.id}>
    //         New name for {props.title}
    //       </label>
    //       <input 
    //         id={props.id} 
    //         className="todo-text" 
    //         type="text"
    //         value={newTitle}
    //         onChange={()=>setNewTitle(e.target.value)} 
    //         />
    //       <label className="todo-label" htmlFor={props.id}>
    //         Description
    //       </label>
    //       <input 
    //         id={props.id} 
    //         className="todo-text" 
    //         type="text"
    //         value={newDescription}
    //         onChange={()=>setNewDescription(e.target.value)} 
    //         />
    //     </div>
    //     <div className="btn-group">
    //       <button 
    //         type="button" 
    //         className="btn btn-danger todo-cancel"
    //         onClick={() => setEditing(false)}

    //       >
    //         Cancel
    //         <span className="visually-hidden">Editing {props.title}</span>
    //       </button>
    //       <button type="submit" className="btn btn__primary todo-edit">
    //         Save
    //         <span className="visually-hidden">new Title for {props.title}</span>
    //       </button>
    //     </div>
    //   </form>
    // );

    const viewTemplate = (
        <tr>
            <th scope="row">{props.id}</th>
            <td>{props.title}</td>
            <td>{props.description}</td>
            <td>
                <button className='btn btn-warning m-2' onClick={() => setEditing(true)}>Edit</button>
                
                <button className='btn btn-danger' onClick={() => props.deleteNote(props.id, props.title)}>Delete</button>
            </td>
        </tr>
    //   <div className="btn-group">
    //     <div className="c-cb">
    //         <input
    //           type="checkbox"
    //           className='btn-check'
    //           id={props.id}
    //           defaultChecked={props.completed}
    //           onChange={() => props.toggleTaskCompleted(props.id)}
    //         />
    //         <label className="todo-label" htmlFor={props.id}>
    //           {props.name}
    //         </label>
    //         <label className="todo-label" htmlFor={props.id}>
    //           {props.name}
    //         </label>
    //       </div>
          
    //       <div className="dropdown-container" tabindex="-1">
    //         <div type='button' className="three-dots btn" onClick={handleHidden} ></div>
    //             <button className='btn btn-warning m-2' hidden={isHidden} onClick={() => setEditing(true)}><div><img src={edit} alt='edit'></img>Edit<span className="visually-hidden">{props.name}</span></div></button>
               
    //             <button className='btn btn-danger' hidden={isHidden} onClick={() => props.deleteTask(props.id, props.name)}><div><img src={trash} alt='delete'></img>Delete<span className="visually-hidden">{props.name}</span></div></button>
    //         </div>
    //   </div>
    );
    
    return <>{isEditing ? editingTemplate : viewTemplate}</>;
} 