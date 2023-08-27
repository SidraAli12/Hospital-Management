 const Joi = require('joi');

const createstaffSchema = Joi.object({
    staffmemberName: Joi.string().min(3).max(20).required(),
    staff_id: Joi.number().required(),
    person_id: Joi.number().min(6).required(),
    phone_number: Joi.number().required(),
 qualification: Joi.string().valid("BSN", "BSC", "INTERMIDIATE").required(),
    salary: Joi.number().valid(7000, 8000, 20000).required(),
    password: Joi.string().required(),
    email: Joi.string().email({
        minDomainSegments:2,
        tlds:{allow:["com","in"]}
    }),
    hospital_detail:Joi.object().keys({
        hospital_id: Joi.number().required(),
        hospital_name:Joi.string().required(),
    }),
}).unknown(false)

module.exports = {
    createstaffSchema
};
