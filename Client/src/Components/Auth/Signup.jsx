import React,{useState} from 'react';
import './Styles/Signup.css';
import { Link,useNavigate } from 'react-router-dom';
function Signup() {
  const [firstname, setFirtsname] = useState("");
  const [lastname, setLastname] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

const navigate=useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    
    let signupData = {
    first_name:firstname,
    last_name:lastname,
    email:email,
    password:password
    };
    if (password !== confirmpassword) {
      alert("Passwords do not match");
      return;
    }
    if(firstname===""||lastname===""||password===""||confirmpassword===""||email===""){
      alert("Please enter all fields.")
    }
    try{

    fetch("https://taupe-raven-gear.cyclic.app/api/users/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(signupData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate("/login")
      })
      .catch((err) => console.log(err));
    }
    catch(err){
      console.log(err);
    }
  };
  return (
    <div className="signup-container">
      <div className="left-container">
        <div className="adorama-container">
          <h1>ElectroGlad</h1>
          <p style={{fontSize:"21px"}}>Have an account? <Link className='signin-link'  to="/login">SIGN IN</Link></p>
        </div>
      </div>
      <div className="right-container">
        <div className="signup-form-container">
          <h2>Create an Account</h2>
          <form className="signup-form" onSubmit={handleSignUp}>
            <div className='firstlast'>
              <div className='first'>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" value={firstname} onChange={(e)=>{setFirtsname(e.target.value)}} name="firstName" placeholder='First Name' required />

            </div>
            <div className='last'>
<label htmlFor="lastName">Last Name</label>

            <input type="text" id="lastName" value={lastname} onChange={(e)=>{setLastname(e.target.value)}} name="lastName" placeholder='Last Name' required />
            </div>
            </div>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" value={email} name="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email Address' required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} name="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' required />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" value={confirmpassword} name="confirmPassword" onChange={(e)=>{setConfirmpassword(e.target.value)}} placeholder='Confirm Password' required />
            <div id='checkbox'>
            
            <div>
            <input type="checkbox"/>
            <p>Remember Me.</p>

            </div>

            </div>
            <button id='submitbtn' type="submit">Create Account</button>
          </form>
         
        </div>
      </div>
    </div>
  );
}

export default Signup;
