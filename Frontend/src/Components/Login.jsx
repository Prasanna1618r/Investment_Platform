import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Css/login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useDispatch} from 'react-redux';
import {addUser} from './Masterslice';
// import { Navbar } from "./nav";
// import { Footer } from "./footer";


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const dispatch = useDispatch();

    const navigate = useNavigate();
const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addUser(email));
  
    try {
      const response = await axios.post('http://127.0.0.1:8181/api/v1/auth/authenticate', {
        gmail: email,
        password: pass,
      });
  
      let token = response.data.token;
      let user = response.data.userResponse;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
  
      navigate('/Dashboard');
    } catch (error) {
      console.error('Error: ', error);
      alert("User not found. Please check your credentials.");
      }
    };

    return (
      <div>
      {/* <Navbar /> */}
        <div className="auth-form-container1">
            <h2 class="l1">Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label required className="em" htmlFor="email">Email</label>
                <br/>
                <input className="i1" required value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <br/>
                <label className="pa" htmlFor="password">Password</label>
                <br/>
                <input className="i1" required value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /><br/>
                <button className="button1" type="submit" >Log In</button>
            </form>
            <Link to={"/Register"}><button className="link-btn1">Don't have an account? Register here.</button></Link>
        </div>
        <footer>
          {/* <Footer /> */}
        </footer>
        </div>
    )
}