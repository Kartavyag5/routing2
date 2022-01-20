import React, {useState} from "react";
// import 'antd/dist/antd.css';
// import { Form, Input, Button, Checkbox } from 'antd';
import getData from './register';

const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isRegistering ,setRegistering] = useState(false);


  // const onFinish = (values) => {
  //   console.log('Success:', values);
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log('Failed:', errorInfo);
  // };

  function handleLogin(e){
    e.preventDefault();
      const data = {email:email, password:password} 
      setEmail(data['email']);
      setPassword(data['password']);
      console.log(data);
      if(data.email===getData.email && data.password===getData.password){
        alert('success');
        setEmail('');
        setPassword('');
      }
      else{
        alert('fail');
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
    //   onSubmit={handleLogin}
    //   autoComplete="off"
    // >
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
    //     name="remember"
    //     valuePropName="checked"
    //     wrapperCol={{
    //       offset: 8,
    //       span: 16,
    //     }}
    //   >
    //     <Checkbox>Remember me</Checkbox>
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
      <h1>login Page</h1>  
    <form onSubmit={handleLogin}>
    <div className="form-group m-2">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" name='email' onChange={(e)=>setEmail(e.target.value)} value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      
    </div>
    <div className="form-group m-2">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" name='password' onChange={(e)=>setPassword(e.target.value)} value={password} id="exampleInputPassword1" placeholder="Password" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  </div>
  );
};

export default Login;
