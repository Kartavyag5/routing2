import React, {useState} from "react";

const Home = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editing, setEditing] = useState(false);
  
  function addNote(e){
    e.preventDefault();
    
    if (title==='' || description===''){
      alert('fail');
    }else{
      const newNote = {
        id:notes.length + 1, 
        title: title, 
        description: description
      };
      setNotes([...notes, newNote]);
      alert('success');
      setTitle('');
      setDescription('');
      setEditing(false);
    }
  }

  
  const noteList = (
    <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {
              notes? notes.map((item,i)=>
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.description}</td>
              </tr>
              )
              :
              <>No Data</> 
            }
          </tbody>
        </table>
  );

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
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
  );

  return (
    <>
    <h1>Home</h1>
      <button className="btn btn-primary" onClick={()=>setEditing(true)}>Add New Note</button>
      {editing? addNoteForm : <></>}
    <p>Notes:</p>
    {noteList}
          
    </>
    );
};
  
export default Home;