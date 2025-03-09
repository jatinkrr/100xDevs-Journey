const {Router} = require("express")
const { middleware } = require("../middlewares/user")
const {coursemodel} = require("../db")
const courseRouter = Router()

//here should check user actually paid or not
courseRouter.post("/purchase",middleware,async (req,res)=>{
    const userId = req.userid;
    const courseId = req.body.courseId

    await coursemodel.create({
        userId,
        courseId
    })
    res.json({
        msg:"course purchased sucessfully"
    }) 
})
courseRouter.post("/preview",async (req,res)=>{
    

   const courses= await coursemodel.find({})
    res.json({
        courses
    })
})

module.exports = {
    courseRouter
}