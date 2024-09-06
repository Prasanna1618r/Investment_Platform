import React, { useState } from "react";
import "./Css/r1.css";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
export const Register1 = (props) => {
    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [dateofbirth, setDateofbirth] = useState('');
    const [nationality, setNationality] = useState('');
    const [ssn, setSsn] = useState('');
    const [email, setEmail] = useState('');
    const [accnumber, setNumber] = useState('');
    const [address, setAddress] = useState('');
    const [annualincome, setIncome] = useState('');
    const [networth, setNetworth] = useState('');
    const [experience, setExperience] = useState('');
    const navigate=useNavigate();

//     const [details,setDetails] = useState([]);
//     useEffect(()=>{
//         fetchData();
//     },[]);

//     const fetchData = async()=>{
//         try{
//         const response = await axios.get("http://127.0.0.1:2004/getu");
//         setDetails(response.data);
//         console.log(response); 
//         }
//     catch(error){
//        console.log("error fetching data");
//     }
// };

     const handleSubmit = (e) => {
        const data = {
            name: name,
            occupation:occupation,
            gender:gender,
            age:age,
            dateofbirth:dateofbirth,
            nationality:nationality,
            ssn:ssn,
            email: email,
            accnumber:accnumber,
            address:address,
            annualincome:annualincome,
            networth:networth,
            experience:experience
        } 
        axios.post("http://127.0.0.1:2004/postu", data);
        console.log(data);
        navigate("/Login");
};

    return (
        <div className="rr">
        <div className="rr1">
            <h2><u>PERSONAL INFORMATION</u></h2>
        <form className="rr2" onSubmit={handleSubmit}>
            <label className="ll1" htmlFor="name">FULLNAME:</label>
            <input className="ii1" required value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter Your Fullname" /> 
            
            <label className="ll1" htmlFor="occupation">OCCUPATION:</label>
            <input className="ii1" required value={occupation} name="occupation" onChange={(e) => setOccupation(e.target.value)} id="occupation" placeholder="Enter Your Occupation" /> 

            <label className="ll1" htmlFor="gender">GENDER:</label>
            <input className="ii1" required value={gender} name="gender" onChange={(e) => setGender(e.target.value)} id="gender" placeholder="Enter Your Gender" /> 

            <label className="ll1" htmlFor="age">AGE:</label>
            <input className="ii1" required value={age} name="age" onChange={(e) => setAge(e.target.value)} id="age" placeholder="Enter Your Age" /> 

            <label className="ll1" htmlFor="dateofbirth">DATE OF BIRTH:</label>
            <input className="ii1" required value={dateofbirth} name="dateofbirth" onChange={(e) => setDateofbirth(e.target.value)} id="dateofbirth" placeholder="DD/MM/YYYY" /> 

            <label className="ll1" htmlFor="nationality">NATIONALITY:</label>
            <input className="ii1" required value={nationality} name="nationality" onChange={(e) => setNationality(e.target.value)} id="nationality" placeholder="Enter Your Nationality" /> 

            <label className="ll1" htmlFor="ssn">SSN:</label>
            <input className="ii1" required value={ssn} name="ssn" onChange={(e) => setSsn(e.target.value)} id="ssn" placeholder="Enter Your Security Number" /> 

            <label className="ll1" htmlFor="email">EMAIL:</label>
            <input className="ii1" required value={email} name="email" onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Enter Your E-mail" /> 

            <label className="ll1" htmlFor="accountnumber">ACCOUNT NUMBER:</label>
            <input className="ii1" required value={accnumber} name="acountnumber" onChange={(e) => setNumber(e.target.value)} id="accountnumber" placeholder="Enter Your Account Number" /> 

            <label className="ll1" htmlFor="address">ADDRESS:</label>
            <input className="ii1" required value={address} name="address" onChange={(e) => setAddress(e.target.value)} id="address" placeholder="Enter Your Address" /> 

            <label className="ll1" htmlFor="annualincome">ANNUAL INCOME:</label>
            <input className="ii1" required value={annualincome} name="annualincome" onChange={(e) => setIncome(e.target.value)} id="annualincome" placeholder="Enter Your Annual Income" /> 

            <label className="ll1" htmlFor="networth">NETWORTH:</label>
            <input className="ii1" required value={networth} name="networth" onChange={(e) => setNetworth(e.target.value)} id="networth" placeholder="Enter Your Networth" /> 

            <label className="ll1" htmlFor="experience">EXPERIENCE:</label>
            <input className="ii1" required value={experience} name="experience" onChange={(e) => setExperience(e.target.value)} id="experience" placeholder="Enter Your Experience" /> 
            <br/>
            <button className="b" type="submit">SUBMIT</button>
        </form>
            <Link to="/register"><button className="link-btn2">Go back</button></Link>
    </div>
    </div>
    )
}
