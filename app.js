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
    // app.listen(PORT, "127.0.0.1", () => {
    //     console.log('listening to port:', PORT)
    // })
    app.listen(PORT, () => {
        console.log("Running on port 5000.");
      });
}

server()