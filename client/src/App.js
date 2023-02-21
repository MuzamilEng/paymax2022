import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Components/Login';
import Singup from './Components/Singup';
import Header from './Props/Header';
import Myaccount from './Components/Myaccount';
import SocialLinks from './Components/SocialLinks';
import ResetPassword from './Components/ResetPassword';
import Delete from './Components/Delete';
import Input2 from './Props/Input2';
import Links from './Components/Links';
import SocialMedia from './Components/SocialMedia';
import Image from './Components/Image';
import React from "./Components/React";
// import ResetOptions from './Props/ResetOptions';
// import Myinformation from './Props/Myinformation';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Singup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/header" element={<Header />} />
        <Route path="/social" element={<SocialLinks />} />
        <Route path="/myaccount" element={<Myaccount />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/input" element={<Input2 />} />
        <Route path="/links" element={<Links />} />
        <Route path="/socialmedia" element={<SocialMedia />} />
        <Route path="/image" element={<Image />} />
        <Route path="/react" element={<React />} />
      </Routes>

      {/* <Login /> */}
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
