require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const {userRoute} = require("./routes/user")
const {adminRoute} = require("./routes/admin")
const {courseroute} = require("./routes/course")
const {purchaseroute} = require("./routes/purchase")


const app = express()
app.use(express.json())

app.use("/user",userRoute)
app.use("/admin",adminRoute)
app.use("/course",courseroute)
app.use("/purchase",purchaseroute)



async function main(){
   await mongoose.connect(process.env.mongoose_url)
    app.listen(3000)
    console.log("connected to DataBase")
}
main()
