const express = require('express');
const router = express.Router();
const {addpatient,updatepatient,deletepatient,allpatient,addDoctor,allDoctor,deleteDoctor,updateDoctor,verifySignup,signIn,adduser,imageuser,imageuseruploadImage, uploadImageHandler}=require('../controller/demo')

const verifyToken = require("../middleware/auth")

//get allpatient
router.get("/api/allpatient", allpatient);
//create patient
router.post("/api/addpatient",addpatient); 

//Delete A Patient
router.delete("/api/deletepatient", deletepatient);
//Update A Patient
router.put("/api/updatepatient",updatepatient);
router.post("/api/addDoctor",addDoctor)
router.get("/api/allDoctor",allDoctor)
router.delete("/api/deleteDoctor",deleteDoctor)
router.put("/api/updateDoctor",updateDoctor)
router.post("/api/adduser",adduser);
router.post('/api/imageuser', imageuser);
router.post("/api/Signup",verifySignup);
router.post("/api/signIn", signIn);
module.exports = router


