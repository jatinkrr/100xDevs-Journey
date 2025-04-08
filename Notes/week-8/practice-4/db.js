const mongoose = require("mongoose")

const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId

const user = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
})

const admin = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
})

const course = new Schema({
    title : String,
    discription : String,
    price :Number,
    courseid:ObjectId
    
})

const purchase = new Schema({
   userId:ObjectId,
   courseId: ObjectId
})
    
// const userModel = mongoose.model("userData",user)
// const adminModel= mongoose.model("adminData",admin)
// const userModel = mongoose.model("userData",user)
// const adminModel= mongoose.model("adminData",admin)
// const couseModel= mongoose.model("coursedata",course)
// const purchaseModel= mongoose.model("purchasedata",purchase)
const userModel = mongoose.model("userData",user)
const adminModel= mongoose.model("adminData",admin)
const couseModel= mongoose.model("coursedata",course)
const purchaseModel= mongoose.model("purchasedata",purchase)

module.exports={
    userModel,
    adminModel,
    couseModel,
purchaseModel
}  