
const {Router} = require("express")
const {adminmodel} = require("../db")
const {coursemodel} = require("../db")
const jwt = require("jsonwebtoken")
const {admin_secret} =require("../config")
const adminRoute = Router()
const bcrypt = require("bcrypt")
const {auth} = require("../middleware/admin")

adminRoute.post("/signup",async (req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    const hashedpassword = await bcrypt.hash(password,5)
try{
    await adminmodel.create({
        firstName,
        lastName,
        email,
        password:hashedpassword
    })
    res.json("you are signed up")
}catch(e){
    res.json({
        msg:"email already exits"
    })
}
})
adminRoute.post("/signin",async (req,res)=>{
    const email = req.body.email
    const password = req.body.password

    const user=await adminmodel.findOne({
        email
    })
    if(!user){
        res.json({
            msg:"email not found"
        })
    }
    const matchPassword =await bcrypt.compare(password,user.password)
    if(matchPassword){
        const token = jwt.sign({
            id:user._id
        },admin_secret)
        res.json({
            token:token
        })
    }else{
        res.json({
            msg:"invalid credantials"
        })
    }
})
adminRoute.post("/course", auth, async (req, res) => {
    const adminId = req.userId;  // Ensure this is correctly set in middleware
    const { title, description, price, imageUrl } = req.body; // Corrected the field name

    try {
        const course = await coursemodel.create({
            title,
            description,
            price,
            imageUrl,
            createrId: adminId
        });
        res.json({
            msg: "Course created",
            courseId: course._id
        });
    } catch (e) {
        res.status(400).json({
            msg: "Failed to create course",
            error: e.message
        });
    }
});

adminRoute.put("/purchase",auth,(req,res)=>{

})
adminRoute.get("/purchase/preview",auth,(req,res)=>{

})
 
module.exports={
    adminRoute
}
