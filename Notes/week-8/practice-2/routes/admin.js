const {Router} = require("express")
const {adminmodel} = require("../db")
const {coursemodel} = require("../db")
const {middleware} = require("../middlewares/admin")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const admin_JWT_SECRET = process.env.admin_JWT_SECRET
const adminRoute = Router()

adminRoute.post("/signup",async (req,res)=>{
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email 
    const password = req.body.password;

try{
    const hashedpassword = await bcrypt.hash(password,5)
   await adminmodel.create({
        firstName,
        lastName,
        email,
        password:hashedpassword
    })
    res.json({
        msg:"you are signed up"
    })

}catch(e){
    res.json({
        msg:"email already exists"
    })
}
})

adminRoute.post("/signin",async (req,res)=>{

    const email = req.body.email 
    const password = req.body.password

    
    const admin=await adminmodel.findOne({
        email
    })
    if(!admin){
        res.json({
            msg:"admin not exists in DataBase"
        })
    }
    const matchPassword = await bcrypt.compare(password, admin.password)

    if(matchPassword){
        const token = jwt.sign({
            id:admin._id
        },admin_JWT_SECRET)
        res.json({
           token : token
        })
    }else{
        res.json({
            msg:"invalid credantials"
        })
    }

})

adminRoute.post("/course",middleware,async (req,res)=>{

    const adminId = req.adminid


try{
    const {title ,discription,price} = req.body
  const course = await coursemodel.create({
        title ,discription,price,createrid:adminId
    })
    res.json({
        msg:"course created",
        courseid:course._id
    })
}catch(e){
    res.json({
        msg:"course can't be created"
    })
}
})
adminRoute.put("/course",middleware,async (req,res)=>{

    const adminId = req.adminid


try{
    const {title ,discription,price,courseid} = req.body
  const course = await coursemodel.updateOne({
    // in updateOne we have to add filter, so check what course we have to change 
    _id: courseid, //flying beast id
    createrid:adminId // createrid: flying beast,if we dont add "createrid:adminid" then anyone will come and udate the changes" ager hum yeah creater id nahi lagate toh koi bhi aaker hamra course update ker sakta tha"
  }, {
        title ,
        discription,
        price,
        
    })
    res.json({
        msg:"course updated",
        courseid:course._id
    })
}catch(e){
    res.json({
        msg:"course can't be updated"
    })
}
})


module.exports = {
    adminRoute
}  