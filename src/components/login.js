import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checker, setEmail, setPassword, setIsLogged, selectEmail, selectPassword,selectIsLogged } from "../features/loginSlice";
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.less';

const Data = JSON.parse(localStorage.getItem("users"));

const Login = () => {
  const dispatch = useDispatch();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [isLogged, setIslogged] = useState(false);
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const isLogged = useSelector(selectIsLogged);

  function handleLogin(e) {
    e.preventDefault();
    const data = { email: email, password: password };
    dispatch(checker(data));
    console.log(data);
    if (data.email === Data.email && data.password === Data.password) {
      dispatch(setIsLogged(true));
      alert("success");
    } else {
      alert("fail");
    }
  }

  function logout(e) {
    e.preventDefault();
    if (email && password) {
      dispatch(checker({ email: "", password: "",isLogged:false }));
      alert("logout success");
    } else {
      alert("no user logged in");
    }
  }

  const loginForm = (
    <div>
    <h1>login Page</h1>
    <Form
      name="basic"
      labelCol={{
        span: 3,
      }}
      wrapperCol={{
        span: 10,
      }}
      
      
      onSubmitCapture ={handleLogin}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Emailid!',
          },
        ]}
      >
        <Input name='email' onChange={(e)=>dispatch(setEmail(e.target.value))} value={email}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password name='password' onChange={(e)=>dispatch(setPassword(e.target.value))} value={password}/>
      </Form.Item>

      <Form.Item
        wrapperCol={{
        offset: 3,
        span: 10,
        }} 
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>

    // <div>
    //   <h1>login Page</h1>
      
    //   <form onSubmit={handleLogin}>
    //     <div className="form-group m-2">
    //       <label for="exampleInputEmail2">Email address</label>
    //       <input
    //         type="email"
    //         className="form-control"
    //         name="email"
    //         onChange={(e) => dispatch(setEmail(e.target.value))}
    //         value={email}
    //         id="exampleInputEmail2"
    //         aria-describedby="emailHelp"
    //         placeholder="Enter email"
    //       />
    //     </div>
    //     <div className="form-group m-2">
    //       <label for="exampleInputPassword2">Password</label>
    //       <input
    //         type="password"
    //         className="form-control"
    //         name="password"
    //         onChange={(e) => dispatch(setPassword(e.target.value))}
    //         value={password}
    //         id="exampleInputPassword2"
    //         placeholder="Password"
    //       />
    //     </div>
    //     <button type="submit" className="btn btn-primary">
    //       Login
    //     </button>
    //   </form>
    // </div>
  );

  return (
    
    <>
      {!isLogged ? (
        loginForm
      ) : (
        <div>
          <h1>logged in User:</h1>
          <p>
          {Data.name}, {Data.email}, {Data.password}
          </p>
          <Button type="primary m-2" className="btn btn-warning" onClick={logout}>
            Logout
          </Button>
        </div>
      )}
    </>
  );
};

export default Login;
