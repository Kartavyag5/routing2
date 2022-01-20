import './App.css';
import React from "react";
// import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import NoPage from './components/nopage';

const App = () => {

  const DATA = [
    {id:'1', title:'note1', description:'this is note1'},
    {id:'2', title:'note2', description:'this is note2'},
    {id:'3', title:'note3', description:'this is note3'}
  ];
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home notes={DATA} />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;