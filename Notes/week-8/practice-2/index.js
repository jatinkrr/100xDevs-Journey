require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const {userRoute} = require("./routes/user")
const {adminRoute} = require("./routes/admin")
const {courseRouter} = require("./routes/course")
const app = express()


app.use(express.json())


 
app.use("/user",userRoute)
app.use("/admin",adminRoute)
app.use("/course", courseRouter)





async function main(){
   await mongoose.connect(process.env.mongoose_url)
    app.listen(4000)
    console.log("connected to DataBase")
}
main()