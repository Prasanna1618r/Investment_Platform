import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Css/register.css";
import { useNavigate } from "react-router-dom";
// import { Navbar } from "./nav";
// import { Footer } from "./footer";

export const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [number, setNumber] = useState('');
    
    const navigate = useNavigate();
    // const [details,setDetails] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post(
            "http://127.0.0.1:8181/api/v1/auth/register",
            {
              name:name,
              gmail: email,
              mobno: number,
              password: pass,
            }
          );
    
          if (response.status === 200) {
            navigate("/Login");
            setName("");
            setNumber("");
            setEmail("");
            setPass("");
          }
        } catch (error) {
          console.error("Error: ", error);
        }
      };
// const isStrongPassword = (pass) => {
//     const minLength = 8;
//     const hasUpperCase = /[A-Z]/.test(pass);
//     const hasLowerCase = /[a-z]/.test(pass);
//     const hasNumber = /\d/.test(pass);
//     const hasSpecialChar = /[!@#$%^&*()]/.test(pass);

//     return (
//         pass.length >= minLength &&
//       hasUpperCase &&
//       hasLowerCase &&
//       hasNumber &&
//       hasSpecialChar
//     );
//   };

    return (
      <div>
        {/* <Navbar /> */}
        <div className="auth-form-container">
            <div className="rrow">
            <div className="rcol1"></div>
            <div className="rcol2">
            <h2 class="rh2">Register</h2>
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
        </div>
    </div>
    <footer>
      {/* <Footer /> */}
    </footer>
    </div>
    )
}
