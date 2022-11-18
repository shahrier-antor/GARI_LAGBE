const mongoose = require("mongoose");

function connectDB(){

    // Connection url to database
    mongoose.connect('mongodb+srv://sathya:sathyapr@cluster0.dkuc0.mongodb.net/sheycars-udemy' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    // Checking connected or not 
    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose