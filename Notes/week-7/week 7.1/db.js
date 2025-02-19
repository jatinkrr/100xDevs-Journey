const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId



const user = new Schema({
    emails:{type:String, unique:true}, //"unique: true" isley kara coz ager 2 same email se login kara toh block ker dega
    password:String,
    name:String
})

const todo = new Schema({
    title:String,
    done:Boolean,
    userId:ObjectId
})

 const UserModel = mongoose.model('users',user)
 const TodoModel = mongoose.model('todos',todo)

 module.exports = {
    UserModel:UserModel,
    TodoModel:TodoModel
 }