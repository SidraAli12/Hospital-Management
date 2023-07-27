const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//creating schema of patient
const patient_schema = new mongoose.Schema({
    patientName : {
        type: String,
        required: true
    },

    patient_id:{
       type:Number,
        required :true},

        password:{
            type:String,
            required :true},

        medication_id:{
            type:Number,
            required :true},



            bed_id:{
                type:Number,
                required :true},


                digonosis:{
                    type:String,
                    required :true},
     
                    discharged_id:{
                        type:Number,
                        required :true},

                        medication:{
                            type:String,
                            required :true}

                    
                    
})
const patient= new mongoose.model('patient', patient_schema)

//export collection
module.exports = { patient};
