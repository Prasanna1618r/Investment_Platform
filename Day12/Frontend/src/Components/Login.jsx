import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./Css/login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const navigate = useNavigate();
    
    const [details,setDetails] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        try{
        const response = await axios.get("http://127.0.0.1:2004/get");
        setDetails(response.data);
        console.log(response); 
        }
    catch(error){
       console.log("error fetching data");
    }
};

    const handleSubmit = (e) => {
        console.log(email);
        console.log(pass);
        if(email.trim()===''|| pass.trim()==='') { 
            alert('Please Enter Details');
        }
        if (details.some((user) => user.email === email && user.password === pass)) {
           navigate("/Dashboard");
        }
        else{
            alert('user not found');
        }
    }

    return (
        <div className="auth-form-container1">
            <h2 class="l1">Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label required className="em" htmlFor="email">Email</label>
                <br/>
                <input className="i1" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <br/>
                <label className="pa" htmlFor="password">Password</label>
                <br/>
                <input className="i1" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /><br/>
                <button className="button1" type="submit" >Log In</button>
            </form>
            <Link to={"/Register"}><button className="link-btn1">Don't have an account? Register here.</button></Link>
        </div>
    )
}