const mongoose=require('mongoose')

const TestimonySchema = mongoose.Schema({
    Email:{type:String,required:true},
    Quote:{type:String,required:true},
    Profile:{type:Object,required:true},
    Injury:{type:Object,required:true},
    Treatment:{type:Object,required:true},
    Approved:{type:String,required:true}
},{collection:'TESTIMONIES'});

module.exports=mongoose.model('TESTIMONIES',TestimonySchema);