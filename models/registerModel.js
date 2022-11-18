const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
     username : {type:String , required: true},
     password: { type: String, required: true },
     cpassword :{type:String , required: true}
})

const RegModel = mongoose.model('Registration' , RegSchema)

module.exports = RegModel