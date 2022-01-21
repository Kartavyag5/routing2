import React, {useState} from "react";
import Note from "./note";
import { nanoid } from 'nanoid'

const Home = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [add, setAdd] = useState(false);
  
  function addNote(e){
    e.preventDefault();
    if (title==='' || description===''){
      alert('fail');
    }else{
      const newNote = {
        id:nanoid(3), 
        title: title, 
        description: description
      };
      notes.push(newNote);
      setNotes(notes);
      alert('success');
      setTitle('');
      setDescription('');
      setAdd(false);
    }
  }

  function editNote(id, newTitle, newDescription){
    const editedNoteList = notes.map(note => {
      if (id === note.id){
        note['title']=newTitle;
        note['description']=newDescription;
        return note;
      }
      return note;
    });
    setNotes(editedNoteList);
  }

  function deleteNote(id,title){
    if(window.confirm("really want to delete note '"+title+"' ?")){
      const remainingNotes = notes.filter(note => id!==note.id);
      setNotes(remainingNotes);
    }
  }

  
  const noteList = notes.map(note =>(
    <Note
      id={note.id}
      title={note.title}
      description={note.description}
      key={note.id}
      editNote={editNote}
      deleteNote={deleteNote} />
  ));
    // <table className="table">
    //       <thead>
    //         <tr>
    //           <th scope="col">Id</th>
    //           <th scope="col">Name</th>
    //           <th scope="col">Description</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {
    //           notes? notes.map((item,i)=>
    //           <tr>
    //             <th scope="row">{item.id}</th>
    //             <td>{item.title}</td>
    //             <td>{item.description}</td>
    //           </tr>
    //           )
    //           :
    //           <>No Data</> 
    //         }
    //       </tbody>
    //     </table>

  const addNoteForm = (
    <div>
      <form onSubmit={addNote}>
        <div className="form-group m-2">
          <label for="exampleInputName1">Title</label>
          <input type="text" className="form-control" name='title' onChange={(e)=>setTitle(e.target.value)} value={title} id="exampleInputTitle1" aria-describedby="nameHelp" placeholder="Enter Title" />
        </div>
        <div className="form-group m-2">
          <label for="exampleInputDescription1">Description</label>
          <input type="text" className="form-control" name='description' onChange={(e)=>setDescription(e.target.value)} value={description} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Description" />
        </div>
      <button type="submit" className="btn btn-success m-2">Save</button>
      <button className="btn btn-warning" onClick={()=>setAdd(false)}>Cancel</button>
    </form>
  </div>
  );

  return (
    <>
    <h1>Home Page</h1>
      <button className="btn btn-primary" onClick={()=>setAdd(true)}>Add New Note</button>
      {add? addNoteForm : <></>}
    <h3>Saved Notes:</h3>
    <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Operations</th>
              
            </tr>
          </thead>
        <tbody>
          {noteList}
        </tbody>
    </table>
          
    </>
    );
};
  
export default Home;