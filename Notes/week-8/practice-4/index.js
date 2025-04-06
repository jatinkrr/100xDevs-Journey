require("dotenv").config()
const mongoose = require("mongoose")
const express = require("express")


const app = express()

async function main(){
    await mongoose.connect(process.env.mongooseUrl)
    app.listen(3000)
    console.log("connected to 3000 server")
} 

main() 
