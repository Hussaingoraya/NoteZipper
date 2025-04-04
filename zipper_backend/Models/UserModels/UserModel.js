const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    username : {type :String , required : true},
    email : {type :String , required : true , unique:true},
    password : {type :String , required : true},
    pic : {type :String }
})
const userModel = mongoose.model("user", UserSchema)
module.exports = userModel