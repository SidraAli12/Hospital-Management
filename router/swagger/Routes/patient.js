/**
 * @swagger
 * /api/addpatient:
 *   post: 
 *     summary: patient Create
 *     tags: [patient]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createpatient'
 *     responses:
 *       200:
 *         description: patient Created Successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/createpatient'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     createpatient:
 *       type: object
 *       required:
 *         - patientName
 *         - patient_id
 *         - digonosis 
 *         - bed_id
 *         - medication_id
 *         - medication
 *         - admitted_id
 *         - discharged_id
 *       properties:
 *         patientName:
 *           type: string
 *         patient_id:
 *           type: number
 *         digonosis:
 *           type: string
 *         bed_id:
 *           type: number
 *         medication_id:
 *           type: number
 *         medication:
 *           type: number
 *         admitted_id:
 *           type: number
 *         discharged_id:
 *           type: string
 */

/**
 * @swagger
 * /api/allpatient:
 *   get:
 *     summary: Get All patient
 *     tags: [patient]
 *     description: All patients 
 *     responses:
 *       200:
 *         description: Returns all the patients
 */

/**
 * @swagger
 * /api/deletepatient:
 *   delete:
 *     summary: Remove the patient
 *     tags: [patient]
 *     parameters:
 *       - in: query
 *         name: id
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: The patient was deleted
 *       404:
 *         description: The patient was not found
 */

/**
 * @swagger
 * /api/updatepatient:
 *   put:
 *     summary: Update a patient
 *     tags: [patient]
 *     parameters:
 *       - in: query
 *         name: id
 *         type: string
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updatepatient'
 *     responses:
 *       200:
 *         description: Patient updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/updatepatient'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     updatepatient:
 *       type: object
 *       required:
 *         - patientName
 *         - patient_id
 *         - digonosis 
 *         - bed_id
 *         - medication_id
 *         - medication
 *         - admitted_id
 *         - discharged_id
 *       properties:
 *         patientName:
 *           type: string
 *         patient_id:
 *           type: number
 *         digonosis:
 *           type: string
 *         bed_id:
 *           type: number
 *         medication_id:
 *           type: number
 *         medication:
 *           type: number
 *         admitted_id:
 *           type: number
 *         discharged_id:
 *           type: string
*/