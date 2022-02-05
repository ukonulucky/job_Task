import React, { useState } from "react";
import Reusable from './Reusable';
import advert from "../Utils/advert.jpg"


import {useForm} from "react-hook-form"
import "../Styles/Register.css"
function Register() {

 const  {handleSubmit, errors } = useForm()
  const onSubmit = (values) => {
    errors.preventDefault()
    console.log(values)
  }

 
  const data = {
    row1: [
      {
        label: "First Name",
        type: "text",
        name: "first_name",
        placeholder: "First Name",
          required: "true",
         classWord: "register_right_first",
    
      },
  
  {
    label: "Last Name",
  type: "text",
  classWord:  "register_right_last",
    name: "last_name",
    placeholder: "Last Name",
    required:"true"
    }
    ],
    row2:
    [
     {
       label: "Email",
       type: "email",
     name: "email",
     classWord:"register_right_first",
       placeholder: "examinner@gmail.com",
       required: "true",
       
   },
   {
     label: "Phone Number",
     type: "number",
     name: "phone",
     classWord: "register_right_last",
     placeholder: "1234567890",
     required: "true",
     
           }
   ],
row3:       [
  {
    label: "Password",
    type: "password",
    classWord: "register_right_first",
    name: "password1",
    placeholder: "pass1234",
    required: "true",
  },
  {
    label: "Confirm Password",
    type: "confirmPassword",
    name: "pass2",
    classWord: "register_right_last",
    placeholder: "pass1234",
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
        <h1>Register</h1>
        <div className="info">
          <h3>Manages your lotterjy efficiently</h3>
          <p>
            lets get you all set up so you can verify your personal account
            and gegin setting up your profile.
          </p>
        </div>
          <div className="register_right_input">
          <Reusable data={ data } />
        </div>
          </div>
      </div>
      </div>
  );
}

export default Register;
