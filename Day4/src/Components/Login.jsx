import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const apidata = "http://127.0.0.1:2004/";
    const [data1] = useState('');
    const [data2] = useState('');

    const navigate = useNavigate();
    useEffect(()=> {
        async function getStoreData()
        {
            const response = await axios.get(apidata);
            setEmail(response.data.email);
            setPass(response.data.pass);
        }
        getStoreData();
    },[]);

    const handleSubmit = (e) => {
        console.log(email);
        console.log(pass);
        if(email.trim()===''|| pass.trim()==='') { 
            alert('Please Enter Details');
        }
        if(data1 !== email && data2 !== pass)
        {
            navigate("/Dashboard");
            alert(email);
        }
        else {
            alert('Enter Valid Credentials');
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