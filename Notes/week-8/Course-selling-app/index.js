require("dotenv").config()
console.log(process.env.mongoDB_url)
const express = require("express")


const mongoose = require("mongoose")

const {userRoute} = require("./routes/user")
const {coursesRoute} = require("./routes/course")
const {adminRouter} = require("./routes/admin")
const {purchaseRouter} = require("./routes/purchase")

const app = express()
app.use(express.json())

app.use("/user", userRoute)
app.use("/course", coursesRoute)
app.use("/admin", adminRouter)
app.use("/purchase",purchaseRouter)


 async function main(){
   await mongoose.connect(process.env.mongoDB_url)

    app.listen(3000)
    console.log("listing on port 3000")

}
main()    
 