const mongoose=require('mongoose')

const UserSchema = mongoose.Schema({
    name:{type:String,required:true},
    manager:{type:Boolean,required:true},
    password:{type:String,required:true},
    email:{type:String,required:true}
},{collection:'USERS'});

module.exports=mongoose.model('USERS',UserSchema);