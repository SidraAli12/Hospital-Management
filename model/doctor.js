
const mongoose=require('mongoose')
const Schema=mongoose.Schema;


const Doctor_Schema=new mongoose.Schema({


    doctorName:{
    
            type: String,
            required: true
        },
    
doctor_id:{
    
        type: Number,
        required: true
    },
    qualification:{

            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
            
        },
        specialist:{
            type:String,
            required:true
        },
        salary:{
            type:Number,
            required:true
        },
    })

const Doctors= new mongoose.model('Doctors', Doctor_Schema)

//export collection
module.exports = { Doctors};

    
        
    




