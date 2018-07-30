var mongoose=require('mongoose')
var Schema = mongoose.Schema

var UserSchema= new Schema({
    first_name: {type: String},
    last_name: {type: String},
    email : {type: String},
    password: {type: String},
    status: {type: String},
    salary:{type: Number},
    department: {type: String}
})

module.exports=mongoose.model('user',UserSchema)