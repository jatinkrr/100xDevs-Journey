const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const user = new Schema({
    email:String,
    password:String,
    name:String
})


const todo = new Schema({
    userid: ObjectId,
    title:String,
    done:Boolean
})

const usermodel = mongoose.model('users', user)
const todomodel= mongoose.model('todos', todo)

module.exports= {
    usermodel,todomodel
}




// const mongoose = require("mongoose")

// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId

// const user = new Schema({
//     name:String,
//     email:String,  
//     password:String
// })

// const todo = new Schema({
//     userId: ObjectId,
//     title:String,
//     done:Boolean
// })

// const UserModel = mongoose.model('users',user);
// const TodoModel = mongoose.model('todos',todo);

// module.exports = {
//     UserModel,
//     TodoModel
// }