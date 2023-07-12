const mongoose = require('mongoose')
const { Schema } = mongoose;
const tripSchema = new Schema({
    name :{
        type : String,
        required : true
    },
    startingDate :{
        type: Date, // Changed type to Date
        required : true
       
       
    },
    endingDate :{
        type: Date, // Changed type to Date
        required : true
        
    },
    duration :{
        type: Number, 
        required : true
        
    },
    price:{
        type: Number,
        required : true
    }
  });


  module.exports = mongoose.model('trip', tripSchema)