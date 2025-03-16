const mongoose = require("mongoose")
        
const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId

const user = new Schema({

    firstName: string,
    lastName: String,
    email:{type:String , unique:true},
    password:string
})
const admin = new Schema({

    firstName: string,
    lastName: String,
    email:{type:String , unique:true},
    password:string
})
const course = new Schema({

    title: string,
    discription: String,
    price:Number,
    imageUrl:string
})
const purchases = new Schema({

  
})

const usermodel = mongoose.model("userData", user)
const adminmodel = mongoose.model("adminData", admin)
const coursemodel = mongoose.model("courseData", course)
const purchasemodel = mongoose.model("purchaseData", purchases)

module.exports = {
    usermodel,
    adminmodel,
    coursemodel,
    purchasemodel
}
 
