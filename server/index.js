const express = require("express")
const cors = require("cors")

const router = require("./Routes/Routes")
const dbConnect = require("./db/dbConnect")
const jobTask = require("./db/dbSchema")


const app = express()

const Port = process.env.PORT || 5000


const corsOptions ={
    origin:'http://localhost:3000', 
    credentials: true,
    optionSuccessStatus:200
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(router)



const connection = async () => {
    try {
        const connect = await dbConnect()
         if (connect !== undefined) {
            app.listen(Port, () => {
                console.log(`Database connected and Server running on PORT ${Port}`)
            })
       }
        }
      catch (error) {
         console.log({
             error: error.message
         })
         
     }
}
connection()
