const express = require('express');
const app = express();
const path= require("path")


const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "hospital api",
			version: "1.0.0",
			description: "hospital API",
		},
		servers: [
			{
				url:"http://localhost:7000"
			},
		],
		components: {
			"securitySchemes": {
				"bearerAuth": {
					"type": "http",
					"scheme": "bearer",
					"bearerFormat": "JWT"
				}
			},

		},
		security: [
			{
				bearerAuth: [],
			},
		],

	},
	//apis: [`${__dirname}/Routes/doctor.js`,]
	apis: [`${__dirname}/Routes/patient.js`,]
};



module.exports = { options }