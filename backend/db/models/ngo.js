const mongoose = require('mongoose');

const ngoSchema = new mongoose.Schema({
    logo:{
        type:String,
        required:false,
        trim:true,
        default:'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-user-image-179582665.jpg'
    },
    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    registrationDate:{
        type:Date,
        required:true
    },
    recievedFunding:{
        type:Boolean,
        required:true,
        default:false
    },
    mail:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    address:{
        type:String,
        required:true,
        unique:true,
    },
    status:{
        type:Boolean,
        required:true,
        default:false
    }
})

const Ngo = mongoose.model('ngo',ngoSchema);

module.exports = Ngo