import React, {useState } from "react";
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.less';
import { useDispatch, useSelector } from "react-redux";
import {setNewDescription,EditNoteObj, setNewTitle,selectNewTitle,selectNewDescription } from "../features/noteSlice";

const Note = (props) => {
  
    const dispatch = useDispatch();
  
    const newTitle = useSelector(selectNewTitle);
    const newDescription = useSelector(selectNewDescription);
    const [isEditing, setEditing] = useState(false);
    // const [newTitle, setNewTitle] = useState(props.title);
    // const [newDescription, setNewDescription] = useState(props.description);
    
    function EditingMode(){
      setEditing(true);
      dispatch(setNewTitle(props.title));
      dispatch(setNewDescription(props.description));
    }
    
    function handleEditing(e){
      e.preventDefault();
      props.editNote(props.id, newTitle, newDescription);
      dispatch(EditNoteObj({
        newTitle:'',
        newDescription:'',
      }));
      setEditing(false);
    }

    const editingTemplate = (
      <div>
        <Form
          name="basic"
          labelCol={{
            span: 3,
          }}
          wrapperCol={{
            span: 10,
          }}
          
          onSubmitCapture ={handleEditing}
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
            <Input name='title' onChange={(e)=>dispatch(setNewTitle(e.target.value))} value={newTitle}/>
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
            <Input name='description' onChange={(e)=>dispatch(setNewDescription(e.target.value))} value={newDescription}/>
          </Form.Item>

          <Form.Item
            wrapperCol={{
            offset: 3,
            span: 10,
            }} 
          >
            <Button type="primary m-2" >Save</Button>
            <Button  onClick={() => setEditing(false)}>Cancel</Button>
          </Form.Item>
        </Form>
    </div>
      //   <div>
      //     <form onSubmit={handleEditing}>
      //       <div className="form-group m-2">
      //         <label for="exampleInputName1">Title</label>
      //         <input type="text" className="form-control" name='title' onChange={(e)=>dispatch(setNewTitle(e.target.value))} value={newTitle} id="exampleInputTitle1" aria-describedby="nameHelp" placeholder="Enter Title" />
      //       </div>
      //       <div className="form-group m-2">
      //         <label for="exampleInputDescription1">Description</label>
      //         <input type="text" className="form-control" name='description' onChange={(e)=>dispatch(setNewDescription(e.target.value))} value={newDescription} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Description" />
      //       </div>
      //     <button type="submit" className="btn btn-success m-2">Save</button>
      //     <button type="button" className="btn btn-warning" onClick={() => setEditing(false)}>Cancel</button>
      //   </form>
      // </div>
      );

    const viewTemplate = (
        <tr>
            <th scope="row">{props.id}</th>
            <td>{props.title}</td>
            <td>{props.description}</td>
            <td>
                <Button type='primary m-2' onClick={EditingMode}>Edit</Button>
                <Button type='danger' onClick={() => props.deleteNote(props.id, props.title)}>Delete</Button>
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

export default Note;