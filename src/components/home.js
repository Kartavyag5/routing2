import React, {useState} from "react";
import Note from "./note";
import { nanoid } from 'nanoid'
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.less';
import { useDispatch, useSelector } from "react-redux";
import {setAdd, setDescription, setTitle,NoteObj, selectAdd, selectDescription, selectTitle } from "../features/homeSlice";
const Home = (props) => {
  const dispatch = useDispatch();
  const [notes, setNotes] = useState(props.notes);
  const title = useSelector(selectTitle);
  const description = useSelector(selectDescription);
  const add= useSelector(selectAdd);
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  // const [add, setAdd] = useState(false);
  
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
      dispatch(NoteObj({
        title:'',
        description:'',
        add:false,
    }));
      // setTitle('');
      // setDescription('');
      // setAdd(false);
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

  const addNoteForm = (
    <div>
    <Form
      name="basic"
      labelCol={{
        span: 3,
      }}
      wrapperCol={{
        span: 10,
      }}
      
      
      onSubmitCapture ={addNote}
      autoComplete="off"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: 'Please input Note Title!',
          },
        ]}
      >
        <Input name='title' onChange={(e)=>dispatch(setTitle(e.target.value))} value={title}/>
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: 'Please input your description!',
          },
        ]}
      >
        <Input name='description' onChange={(e)=>dispatch(setDescription(e.target.value))} value={description}/>
      </Form.Item>

      <Form.Item
        wrapperCol={{
        offset: 3,
        span: 10,
        }} 
      >
        <Button type="primary m-2" htmlType="submit">
          Save
        </Button>
        <Button type="danger" htmlType="Cancel" onClick={()=>dispatch(setAdd(false))}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
    </div>
  //   <div>
  //     <form onSubmit={addNote}>
  //       <div className="form-group m-2">
  //         <label for="exampleInputName1">Title</label>
  //         <input type="text" className="form-control" name='title' onChange={(e)=>dispatch(setTitle(e.target.value))} value={title} id="exampleInputTitle1" aria-describedby="nameHelp" placeholder="Enter Title" />
  //       </div>
  //       <div className="form-group m-2">
  //         <label for="exampleInputDescription1">Description</label>
  //         <input type="text" className="form-control" name='description' onChange={(e)=>dispatch(setDescription(e.target.value))} value={description} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Description" />
  //       </div>
  //     <button type="submit" className="btn btn-success m-2">Save</button>
  //     <button className="btn btn-warning" onClick={()=>dispatch(setAdd(false))}>Cancel</button>
  //   </form>
  // </div>
  );

  return (
    <>
    <h1>Home Page</h1>
      <button className="btn btn-primary" onClick={()=>dispatch(setAdd(true))}>Add New Note</button>
      {add? addNoteForm : <></>}
    <h3 className="m-2">Saved Notes:</h3>
    <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
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