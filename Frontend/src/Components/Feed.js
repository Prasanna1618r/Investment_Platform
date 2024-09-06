import React, { useState } from 'react';
import './Css/feedback.css';
import { useNavigate } from 'react-router-dom';
import { addFeedback } from './api';

const FeedForm = () => {
//   const [email, setEmail] = useState('');
//   const [Name, setName] = useState('');
//   const[Subject,setSubject]=useState('');
//   const[Message,setMessage]=useState('');
const[formdata,setFormdata]= useState({
    email: '',
    name: '',
    subject: '',
    message: ''
   
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
    // console.log(formdata);
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await addFeedback(formdata);
      alert("Successfully added feedback");
      navigate('/')
    }
    catch(error){
      console.log(error);
    }

    console.log(formdata);
  }
  return (
    <div className="down">
      <div className="ffor">
        <h2>FEEDBACK</h2>
        <form onSubmit={handleSubmit} >
          <input className='fi'
            type="email"
            placeholder="Email"
            id='email'
            onChange={handleChange}
            required
          />
          <input className='fi'
            type="name"
            placeholder="Name"
            id='name'
            onChange={handleChange}
            required
          />
             <input className='fi'
            type="name"
            placeholder="Subject"
            id='subject'
            onChange={handleChange}
            required
          />
            <input className='fi'
            type="name"
            placeholder="Message"
            id='message'
            onChange={handleChange}
            required
          />
          <button className='fb1' type='submit' onChange={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>

  );
};

export default FeedForm;