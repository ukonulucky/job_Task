const express = require("express")
const router = express.Router()
const jobTask = require("../db/dbSchema")
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")
const dotenv = require("dotenv")

router.post("/api/user/auth/register/", async (req, res) => {
    try {
    console.log(req.body)
            const user = await jobTask.create(req.body)
            if (user) {
               console.log(user)
                res.status(201).json(user._id)           
            }
    
    } catch (error) {
       res.json(error.message)
    }
})


router.post("/api/user/auth/login/", async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await jobTask.find({email,password})
        if (user) {
            res.status(201).json(user._id)
            console.log("the value obtained is", user)
        }
    
    } catch (error) {
      res.json(error.message)
    }
})



module.exports = router