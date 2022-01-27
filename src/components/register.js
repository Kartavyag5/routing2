import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "./registerSlice";
// import { Form, Input, Button } from 'antd';
// import 'antd/dist/antd.css';

const Data = JSON.parse(localStorage.getItem("users"));

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  // const onFinish = (values) => {
    //   console.log('Success:', values);
    // };
    
    // const onFinishFailed = (errorInfo) => {
      //   console.log('Failed:', errorInfo);
      // };
      
      function handleSubmit(e) {
        e.preventDefault();
        const user = { name: name, email: email, password: password };
        dispatch(createUser(user));
        localStorage.setItem("users", JSON.stringify(user));
        if (!user.email || !user.password || !user.name) {
          alert("fail");
        } else {
          alert("success");
          console.log(user);
          dispatch(createUser({ name: "", email: "", password: "" }));
        }
      }

  return (
    // <Form
    //   name="basic"
    //   labelCol={{
    //     span: 8,
    //   }}
    //   wrapperCol={{
    //     span: 16,
    //   }}
    //   initialValues={{
    //     remember: true,
    //   }}
    //   onFinish={onFinish}
    //   onFinishFailed={onFinishFailed}
    //   onSubmit= {handleSubmit}
    //   autoComplete="off"
    // >
    //   <Form.Item
    //     label="Username"
    //     name="username"
    //     rules={[
    //       {
    //         required: true,
    //         message: 'Please input your username!',
    //       },
    //     ]}
    //   >
    //     <Input name='name' onChange={(e)=>setName(e.target.value)} value={name}/>
    //   </Form.Item>

    //   <Form.Item
    //     label="Email"
    //     name="email"
    //     rules={[
    //       {
    //         required: true,
    //         message: 'Please input your Emailid!',
    //       },
    //     ]}
    //   >
    //     <Input.Email name='email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
    //   </Form.Item>

    //   <Form.Item
    //     label="Password"
    //     name="password"
    //     rules={[
    //       {
    //         required: true,
    //         message: 'Please input your password!',
    //       },
    //     ]}
    //   >
    //     <Input.Password name='password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
    //   </Form.Item>

    //   <Form.Item
    //     wrapperCol={{
    //       offset: 8,
    //       span: 16,
    //     }}
    //   >
    //     <Button type="primary" htmlType="submit">
    //       Submit
    //     </Button>
    //   </Form.Item>
    // </Form>

    <div>
      <h1>Registration Page</h1>
      <p>
        {Data.name}, {Data.email}, {Data.password}
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group m-2">
          <label for="exampleInputName1">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            id="exampleInputName1"
            aria-describedby="nameHelp"
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group m-2">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group m-2">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
