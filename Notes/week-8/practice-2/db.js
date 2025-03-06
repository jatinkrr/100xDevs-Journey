const mongoose = require("mongoose")

const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId

const user = new Schema({
    firstName : String,
    lastName : String,
    email : {type:String , unique:true},
    password : String
})
const admin = new Schema({
    firstName : String,
    lastName : String,
    email : {type:String , unique:true},
    password : String
})
const course = new Schema({
    title : String,
    discription : String,
    price :Number,
    
})
const purchase = new Schema({
   
})

const usermodel = mongoose.model("userData", user)
const adminmodel = mongoose.model("adminData", admin)
const coursemodel = mongoose.model("courseData", course)
const purchasemodel = mongoose.model("purchaseData", purchase)

module.exports = {
    usermodel,
    adminmodel,
    coursemodel,
    purchasemodel
}