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
    
// const userModel = mongoose.model("userData",user)
// const adminModel= mongoose.model("adminData",admin)
const userModel = mongoose.model("userData",user)
const adminModel= mongoose.model("adminData",admin)

module.exports={
    userModel,
    adminModel
}