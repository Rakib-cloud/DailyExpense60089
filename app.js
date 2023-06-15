const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const router = require("./routes/transactions");
// const {readdirSync} = require('fs')
const app = express()

require('dotenv').config()

 const PORT =process.env.PORT|| 4000

//middlewares
app.use(express.json())
app.use(cors())



app.use("/api/v1", router)

const server = () => {
    db()
    app.listen(PORT, `${process.env.LOCALURL}`, () => {
        console.log('listening to port:', PORT)
    })
   
}

server()