const express = require("express")
const {userRoute} = require("./routes/user")
const {adminRoute} = require("./routes/admin")
// const {userRoute} = require("./routes/user")
// const {userRoute} = require("./routes/user")
const app = express()

app.use("/user",userRoute)
app.use("/admin",adminRoute)

app.listen(3000)