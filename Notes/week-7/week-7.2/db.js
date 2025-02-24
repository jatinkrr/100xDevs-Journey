const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const user = new Schema({
    name:String,
    email: { type:String , unique: true},
    password:String
})
const todo = new Schema({
    UserId:ObjectId,
    title:String,
    done:Boolean
})

const usermodel = mongoose.model("users",user)
const todomodel= mongoose.model("todos",todo)

module.exports = {
    usermodel,todomodel
} 
























// const mongoose = require("mongoose")
// const Schema = mongoose.Schema
// const ObjectId = mongoose.ObjectId

// const user = new Schema({
//     name:String,
//     email: {type:String, unique: true},
//     password:String
// })

// const todo = new Schema({
//     userId: ObjectId,
//     title:String,
//     done:Boolean
// })

// const usermodel = mongoose.model("userss",user)
// const todomodel= mongoose.model("todoss",todo)

// module.exports={
//     usermodel,
//     todomodel
    
    
    
    
    
    
    
    
    
    
//     // const mongoose = require("mongoose")
    
//     // const Schema = mongoose.Schema
//     // const ObjectId = mongoose.ObjectId
    
//     // const user = new Schema({
//     //     emai
//     // })
    
    
    
    
    
    
    
// }