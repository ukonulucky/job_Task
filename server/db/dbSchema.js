
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
const validator = require("validator")

const Schema = mongoose.Schema

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        lowercase: true,
    },

    last_name: {
        type: String,
        required: true,
        lowercase: true
    },
    
    phone: {
        type: String,
        required: true
      
    },
    email: {
        type: String,
        required: true
      
    },
    password1: {
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