import React, { useState } from "react";

export const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [age, setAge] = useState('');
    const [dob, setDob] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Username</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter Your Fullname" />

            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />

            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            
            <label htmlFor="age">Age</label>
            <input value={age} onChange={(e) => setAge(e.target.value)} type="age" placeholder="Your Age" id="age" name="age" />

            <label htmlFor="dob">DOB</label>
            <input value={dob} onchange={(e) => setDob(e.target.value)} type="date" id="date" name="date"/>

            <label htmlFor="phonenumber">Mobile Number</label>
            <input value={number} onChange={(e) => setNumber(e.target.value)} type="phonenumber" placeholder="Enter your Moblie Number" id="number" name="number" />
            
            <label htmlFor="address">Address</label>
            <input value={address} onChange={(e) => setAddress(e.target.value)} type="address" placeholder="Enter Your Address" id="address" name="address" />
            <br/>
            <button type="submit">Proceed</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}
