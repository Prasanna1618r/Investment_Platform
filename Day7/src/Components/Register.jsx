import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Css/register.css";
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [number, setNumber] = useState('');
    
    const navigate = useNavigate();
    const [avail,setAvail] = useState(false);
    
    
    const handleSubmit = (e) => {
        axios.get(`http://127.0.0.1:2004/get/${email}`).then(response => {console.log(response.data.email); if(response.data.email===null){setAvail(true); console.log(avail);}}).catch(error => {console.log(error);})
        const data = {
            name: name,
            email: email,
            password: pass,
            number: number,
        }
    
    if(name.trim() === ''|| email.trim()===''|| pass.trim()===''||number.trim()==='') { 
        alert('Please Enter Details');
    }
    if(avail === true){
        alert('User already exists');
    }
    else{
        axios.post("http://127.0.0.1:2004/post", data);
        console.log(data);
        navigate("/Register1");
    }
};

    return (
        <div className="auth-form-container">
            <h2 class="h2">Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
            <label className="lab" htmlFor="name">Username</label>
            <input required  value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter Your Fullname" />
            <label className="lab" htmlFor="email">E-mail</label>
            <input required value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label className="lab" htmlFor="password">Password</label>
            <input required value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label className="lab" htmlFor="phonenumber">Mobile Number</label>
            <input required value={number} onChange={(e) => setNumber(e.target.value)} type="phonenumber" placeholder="Enter your Moblie Number" id="number" name="number" />
            <button className="button2" type="submit">Proceed</button>
        </form>
        <Link to={"/Login"}><button className="pb">Already have an account? Login here.</button></Link>
    </div>
    )
}
