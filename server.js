const express = require('express');
const app = express();

const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
  const swaggerJsDoc = require("swagger-jsdoc");
  const { options } = require('./swagger/swagger');
  const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(cors())

require('dotenv').config();
const router = require('./router/router')
const port = process.env.PORT
require('./db/prob');
//app.use('/uploads', express.static('uploads'))l;
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use([router])

app.listen(port, () => {
    console.log(`Our Server is running at port ${port}`)
   
})








