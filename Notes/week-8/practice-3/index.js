require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()



 

async function main(){
    await mongoose.connect(process.env.mongoose_url)
    app.listen(3000)
    console.log("connect to Database")
}
main()


