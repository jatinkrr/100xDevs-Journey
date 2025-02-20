const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const users = new Schema({
    name:String,
    email:String,
    password:String
})

const todos = new Schema({
    title:String,
    done:Boolean,
    id:ObjectId
})

const usermodel= mongoose.model('userssss',users)
const todomodel = mongoose.model('todosss',todos)

module.exports={
    usermodel,todomodel
}