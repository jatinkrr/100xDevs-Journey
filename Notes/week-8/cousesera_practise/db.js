const mongoose = require("mongoose")

const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId

const user = new Schema({
    firstName : String,
    lastName : String,
    email : {type:String, unique:true},
    password : String,
})
const admin = new Schema({
    firstName : String,
    lastName : String,
    email : {type:String, unique:true},
    password : String,
})
const course = new Schema({
    title : String,
    discription : String,
    price : Number,
    imageUrl : String,
    createrId: ObjectId
})
const purchase = new Schema({
   courseId:ObjectId,
   userId:ObjectId
})

const usermodel = mongoose.model('userdata',user)
const adminmodel = mongoose.model('admindata',admin)
const coursemodel = mongoose.model('coursedata',course)
const purchasemodel = mongoose.model('purchaseData',purchase)

module.exports = {
    usermodel,
    adminmodel,
    coursemodel,
    purchasemodel
}


