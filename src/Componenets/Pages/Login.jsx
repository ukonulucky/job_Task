import React from "react";
import Reusable2 from './Reusable2';
import advert from "../Utils/advert.jpg"
import "../Styles/Register.css"
function Login() { 
  const data = {
    row3: [
  
      {
        label: "Email",
        type: "email",
      name: "email",
      classWord:"register_right_first",
        placeholder: "examiner@gmail.com",
        required: "true",
        
    },
  {
    label: "Password",
    type: "password",
    classWord: "register_right_first",
    name: "password1",
    placeholder: "password1234",
    required: "true",
  }
  
]

     
  }
return (
    <div className="register">
       <div className="register_left">
      <img src={ advert } alt="advert" />
      </div>
      <div className="register_div">
      <div
        className="register_right" >
        <h1>Login</h1>
        <div className="info">
          <h3>Manages your lotterjy efficiently</h3>
          <p>
            lets get you all set up so you can verify your personal account
            and gegin setting up your profile.
          </p>
        </div>
          <div className="register_right_input">
          <Reusable2 data={ data } />
        </div>
          </div>
      </div>
      </div>
  );
}

export default Login;
