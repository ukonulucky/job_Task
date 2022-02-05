
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
const validator = require("validator")

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        lowercase: true,
    },

    lastName: {
        type: String,
        required: true,
        lowercase: true
    },
    
    phoneNumber: {
        type: String,
        required: true
      
    },
    email: {
        type: String,
        required: true
      
    },
    password: {
        type: String,
        required: true
      
    },
      Date:{
      type: Date, 
      default: Date.now()
  }
})


const jobTask = mongoose.model("jobTask", userSchema)
module.exports = jobTask