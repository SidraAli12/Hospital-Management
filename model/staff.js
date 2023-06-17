const mongoose=require('mongoose')
const schema=mongoose.Schema;

const staff_schema=new mongoose.Schema({


    staffmemberName:{
        type:String,
        require:true
    },

    staff_id:{
            type:Number,
            require:true
        

    },

    person_id:{
        type:Number,
        require:true
    },

    email:{
        type:String,
        require:true
    },

    phone_number:{
        type:Number,
        require:true
    },

    hospital_detail:{
    type:String,
    require:true
},
qualification:{

    type: String,
    required: true
},

salary:{
    type:Number,
    required:true
},
password:{
    type:String,
    required:true
}
   
    })


    const staffs=new mongoose.model('staffs',staff_schema)
    module.exports={staffs}


