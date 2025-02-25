const express = require("express")
const {userRoute} = require("./routes/user")
const {coursesRoute} = require("./routes/course")
const {adminRouter} = require("./routes/admin")
const app = express()

app.use("/user", userRoute)
app.use("/course", coursesRoute)
app.use("/admin", adminRouter)



app.listen(3000)


 