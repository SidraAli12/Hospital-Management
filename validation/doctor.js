const Joi = require('joi');  
const createDoctorSchema = Joi.object({
    doctorName: Joi.string().min(3).max(20).required(),
    doctor_id: Joi.number().required(),
    qualification : Joi.string().optional().valid('MBBS',"BDS",'DPT').required(),
    email: Joi.string().required(),
    specialist: Joi.string().required(),
    salary:Joi.number().required()
}).unknown(false);
module.exports = {
    createDoctorSchema
  };