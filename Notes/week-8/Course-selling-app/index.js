const express = require("express")
const {userRoute} = require("./routes/user")
const {coursesRoute} = require("./routes/course")
const app = express()

app.use("/user", userRoute)
app.use("/course", coursesRoute)



app.listen(3000)


