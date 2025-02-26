const mongoose = require("mongoose")

const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId

const users = new Schema({
    
    firstNname:String,
    lastName:String,
    email:{type:String, unique:true},
    password:String
})
const course = new Schema({
    
    title:String,
    description:String,
    price:Number,
    imageUrl:String,
})
const admin = new Schema({
    
    first_name:String,
    last_name:String,
    email:{type:String, unique:true},
    password:String
})
const purchase = new Schema({
    
    courseId:ObjectId,
    userId:ObjectId
})


const usermodel = mongoose.model('User-Data',users) 
const coursemodel = mongoose.model('course-Data',course) 
const adminmodel = mongoose.model('admin-Data',admin) 
const purchasemodel = mongoose.model('purchase-Data',purchase) 

module.exports = {
    usermodel,
    coursemodel,
    adminmodel,
    purchasemodel
}  