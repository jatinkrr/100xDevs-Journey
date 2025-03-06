require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const {userRoute} = require("./routes/user")
const app = express()


app.use(express.json())



app.use("/user",userRoute)





async function main(){
   await mongoose.connect(process.env.mongoose_url)
    app.listen(3000)
    console.log("connected to DataBase")
}
main()