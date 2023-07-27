const Joi = require('joi');  





const createPatientSchema = Joi.object({
    patientName: Joi.string().min(3).max(20).required(),
    patient_id: Joi.number().required(),
    password: Joi.string().min(6).required(),
    medication_id: Joi.number().required(),
    bed_id:Joi.number().required(),
    digonosis: Joi.string().required(),
    discharged_id :Joi.number().required(),
    medication:Joi.string().optional().valid("chemotherapy","NCI","H. Halaven").required()
}).unknown(false);
module.exports = {
    createPatientSchema
  };