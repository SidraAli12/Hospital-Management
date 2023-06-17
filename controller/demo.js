



const { patient } = require("../model/patient");
const { Doctors } = require("../model/doctor");
const { staffs } = require("../model/staff");
const { user } = require("../model/user");
const sgMail = require("@sendgrid/mail");
const accountSid = 'ACd40dea08b1a7b71b64f4ea4be94d19b3';
const authToken = 'a55bbb534f05b58a01b3faa8b2f27e1f';
const client = require('twilio')(accountSid, authToken);
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cloudinary=require('cloudinary').v2
var { ObjectId } = require("mongodb");
cloudinary.config({
  cloud_name: "dvotj8eok",
  api_key: "349473895281936",
  api_secret: "vKDb5b56gTmpn4PSauTJydiP4nA"
});
const API_KEY =
  "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";
sgMail.setApiKey(API_KEY);





// insert patient
const addpatient = async (req, res) => {
  try {
    //console.log(req.file)
    const addpatient = new patient({
      // making object for patient to store all info

      patientName: req.body.patientName,
      patient_id: req.body.patient_id,
      digonosis: req.body.digonosis,
      bed_id: req.body.bed_id,
      medication_id: req.body.medication_id,

      medication: req.body.medication,
      admitted_id: req.body.admitted_id,
      discharged_id: req.body.discharged_id,
    });
    let insertpatient = await addpatient.save();
    res.send(insertpatient);
  } catch (e) {
    res.send(e);
    console.log(e);
  }
};

//all patient

const allpatient = async (req, res) => {
  try {
    const allpatient= await patient.find({})
    // console.log(allpatient)
    res.send({allpatient});
    
  } catch (e) {
    console.log(e);
    res.send(e);
    //res.status(500).send({ error: 'An error occurred while fetching the patient count.' });
  }

  }


//delete patient

const deletepatient = async (req, res) => {
  try {
    let _id = req.query.id;
    const getstdspe = await patient.findByIdAndDelete(_id);
    res.send(getstdspe);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};

//update patient

const updatepatient = async (req, res) => {
  try {
    let _id = req.query.id;
    const getstdspe = await patient.findByIdAndUpdate(_id, req.body, {
      new: true, //new updated value usi waqt mil jae uskay liye kia hay
    });
    res.send(getstdspe);
  } catch (e) {
    console.log(e);
      res.send(e);
  }
};
//ADD DOCTORS

const addDoctor = async (req, res) => {
  try {
    const addDoctor = new Doctors({
      doctorName: req.body.doctorName,
      doctor_id: req.body.doctor_id,
      qualification: req.body.qualification,
      email: req.body.email,
      specialist: req.body.specialist,
      salary: req.body.salary,
    });

    let insertDoctor = await addDoctor.save();

    const Message = {
      to: req.body.email,
      from: "sidrasamoon@gmail.com",
      subject: "hello from sendgrid",
      templateId: "d-bef8b4bfdee1490a932fd2a3536dbf14",
      dynamicTemplateData: {
        fullname: req.body.doctorName,
      },
    };

    await sgMail.send(Message);
    console.log("email sent");

    res.send({
      success: true,
      Message: "doctor inserted succesfully",
      insertDoctor,
    });
  } catch (e) {
    console.log(e);
    res.send({ success: false, Message:e});
  }
};

//allDoctor

/*const allDoctor = async (req, res) => {
  try {
    const allDoctor = await Doctors.find({$and:[{doctorName:"Sidra"},
    {qualification:"mbbs"}]}
    .select({doctorName:1})
  )
    console.log(allDoctor)
    res.send(allDoctor);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};*/
const allDoctor = async (req, res) => {
  try {
    const allDoctor = await Doctors.find({"doctorName": { $ne:"Sidra"}})
    //.select({doctorName:2})
   // .count({doctorName:1})
   //.limit(5)
   //.skip(5)
   //.distinct("doctor_id")
    console.log(allDoctor)
    /*res.send(allDoctor);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};*/
res.status(200).send(String(allDoctor)); // Use res.status(200) and convert alldoctor to a string before sending

  } catch (e) {
    console.log(e);
    res.status(500).send(e); // Use res.status(500) for internal server error and send the error message
  }
};

//deleteDoctor
const deleteDoctor = async (req, res) => {
  try {
    let _id = req.query.id;
    const getstdspe = await Doctors.findByIdAndDelete(_id);
    res.send({
      success: true,
      Message: "doctor deleted succesfully",
      getstdspe,
    });
  } catch (e) {
    res.send({ success: true, Message: "error", deleteDoctor });
    console.log(e);
  }
};

//updateDoctor

const updateDoctor = async (req, res) => {
  try {
    let _id = req.query.id;
    const getstdspe = await Doctors.findByIdAndUpdate(_id, req.body, {
      new: true, //new updated value usi waqt mil jae uskay liye kia hay
    });
    res.send({
      success: true,
      Message: "doctor updated succesfully",
      getstdspe,
    });
  } catch (e) {
    console.log(e);
    res.send({ success: true, Message: "error", getstdspe });
  }
};
//verifysignup

const verifySignup = async (req, res) => {
  try {
    const addstaff = new staffs(req.body); //get information for staff
    var encryptedPassword = await bcrypt.hash(addstaff.password, 10); //convert password in bcrpt form
    addstaff.password = encryptedPassword; //converted
    let insertstaff = await addstaff.save(); //then insert staff info then saved
    const token = jwt.sign(
      {
        email: addstaff.email,
        _id: addstaff._id,
        phone_number: addstaff.phone_number,
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: "24h",
      }
    );

    let tokens = token;
    let helperfunction = () => {
      // defined that sends a response back to the client with a status code of 201
      let response = res.statusCode;
      let messages = "Sign-up Successful";
      let status = true;
      let Data = { name: req.body.name, tokens };
      return res
        .status(201)
        .send({
          response: response,
          message: messages,
          status: status,
          Data: Data,
        });
    };
    helperfunction();
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

//Sign In
const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }
    const staff = await staffs.findOne({ email: email });
    if (staff && (await bcrypt.compare(password, staff.password))) {
      const token = jwt.sign(
        {
          _id: staff._id,
          email: staff.email,
          phone_number: staff.phone_number,
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: "24h",
        }
      );
      var tokens = token;
      let helperfunction = () => {
        let response = res.statusCode;
        let messages = "Login Successful ";
        let status = true;
        let Data = { name: staff.staffmemberName, tokens };
        return res
          .status(200)
          .send({
            response: response,
            message: messages,
            status: status,
            Data: Data,
          });
      };
      helperfunction();
    } else {
      return res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
  }
};

const adduser = async (req, res) => {
  try {
    const adduser = new user({
      phoneNumber: req.body.phoneNumber,
      

    });

    let insertuser = await adduser.save();

    
    const message = await client.messages.create({
        body: 'Hello sidra!',
        from: '+15673761788',
        to: req.body.phoneNumber
    });

    console.log(message.sid);

    res.send({
      success: true,
      Message: "user inserted successfully",
      insertuser,
    });
  } catch (e) {
    console.log(e);
    res.send({ success: false, Message: "error" });
  }
};

const uploadImage = async (file) => {
  const result = await cloudinary.uploader.upload(file.tempFilePath);
  return result.secure_url;
};

const imageuser = async (req, res) => {
  try {
    // Check if file was provided in request body
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }

    const imageUrl = await uploadImage(req.files.photo);

    // Save the image URL to the user's profile
    const user = await User.findById(req.user.id);
    user.imageUrl = imageUrl;
    await user.save();

    res.status(200).json({ message: 'Image uploaded successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong.');
  }
};

const uploadImageHandler = async (req, res) => {
  try {
    // Check if file was provided in request body
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }

    const file = req.files.photo;
    const result = await cloudinary.uploader.upload(file.tempFilePath);

    // Create a new image record in the database with the Cloudinary URL
    const newImage = new Image({ imageUrl: result.secure_url });
    await newImage.save();

    res.send('Image uploaded successfully.');
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong.');
  }
};















module.exports = {
  addpatient,
  updatepatient,
  deletepatient,
  allpatient,
  addDoctor,
  allDoctor,
  deleteDoctor,
  updateDoctor,
  verifySignup,
  signIn,
  adduser,
  imageuser,
  uploadImage, 
  imageuser, 
  uploadImageHandler,

  
  
  
  };
  