import React, { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./register.css";
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [age, setAge] = useState('');
    const [dob, setDob] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');
    const [nationality, setNationality] = useState('');
    // const [data1,setData1] = useState('');
    const navigate = useNavigate();
    const apidata = "http://127.0.0.1:2004/";
    
    // useEffect(()=> {
    //     async function getStoreData()
    //     {
    //         const response = await axios.get(apidata);
    //         setEmail(response.data.email);

    //     }
    //     getStoreData();
    // },[]);
    const handleSubmit = (e) => {
        const data = {
            name: name,
            email: email,
            password: pass,
            age: age,
            dob: dob,
            number: number,
            address: address,
            nationality: nationality,
        }
    if(name.trim() === ''|| email.trim()===''|| pass.trim()===''|| age.trim()===''|| dob.trim()===''|| number.trim()===''|| address.trim()===''|| nationality.trim()==='') { 
        alert('Please Enter Details');
    }
    // if(data1 !== email){
    //     alert(data1);
    // }
    else{
        axios.post("http://127.0.0.1:2004/post", data);
        navigate("/Login");
        alert(email);
    }
};

    return (
        <div className="auth-form-container">
            <h2 class="h2">Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
           <pre><label className="lab" htmlFor="name">Username</label>
            <input required  value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter Your Fullname" />
            <label className="lab" htmlFor="email">E-mail</label>        <input required value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            </pre>

            <pre>
            <label className="lab" htmlFor="password">Password</label>
            <input required value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /><label className="lab" htmlFor="age">Age</label>            <input value={age} onChange={(e) => setAge(e.target.value)} type="age" placeholder="Your Age" id="age" name="age" />
            </pre>

            <pre>
            <label className="lab" htmlFor="dob">DOB</label>      <input required value={dob} onChange={(e) => setDob(e.target.value)} type="dob" placeholder="DD-MM-YYYY" id="dob" name="dob" /><label className="lab" htmlFor="phonenumber">Mobile Number</label>
            <input required value={number} onChange={(e) => setNumber(e.target.value)} type="phonenumber" placeholder="Enter your Moblie Number" id="number" name="number" />
            </pre>

            <pre>
            <label className="lab" htmlFor="address">Address</label> <input required value={address} onChange={(e) => setAddress(e.target.value)} type="address" placeholder="Enter Your Address" id="address" name="address" />
            <label className="lab" htmlFor="nationality">Nationality</label>   <input required value={nationality} onChange={(e) => setNationality(e.target.value)} type="nationality" placeholder="Enter Your Nationality" id="nationality" name="nationality" />
            </pre>
            {/* <p className="cl" htmlFor="click">Click Here To Next!</p> */}
            <button className="button" type="submit" >Proceed</button>
        </form>
        <Link to={"/Login"}><button className="pb">Already have an account? Login here.</button></Link>
    </div>
    )
}
