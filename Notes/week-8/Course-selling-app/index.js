const express = require("express")
const mongoose = require("mongoose")

const {userRoute} = require("./routes/user")
const {coursesRoute} = require("./routes/course")
const {adminRouter} = require("./routes/admin")
const {purchaseRouter} = require("./routes/purchase")

const app = express()

app.use("/user", userRoute)
app.use("/course", coursesRoute)
app.use("/admin", adminRouter)
app.use("/purchase",purchaseRouter)


 async function main(){
   await mongoose.connect("mongodb+srv://hunny:EKcZB1K9@cluster0.3vulh.mongodb.net/coussera-app")

    app.listen(3000)
    console.log("listing on port 3000")

}
main()
