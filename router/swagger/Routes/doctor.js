/**
 * @swagger
 * /api/addDoctor:
 *   post: 
 *     summary: Doctor Create
 *     tags: [Doctor]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createDoctor'
 *     responses:
 *       200:
 *         description: Doctor Created Successffully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/createDoctor'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     createDoctor:
 *       type: object
 *       required:
 *         - doctorName
 *         - doctor_id
 *         - qualification 
 *         - email
 *         - specialist
 *         - salary 
 *       properties:
 *         doctorName:
 *           type: string
 *         doctor_id:
 *           type: number
 *         qualification:
 *           type: string
 *         email:
 *           type: string
 *         specialist:
 *           type: string
 *         salary:
 *           type: number
 */


/**
 * @swagger
 * /api/allDoctor:
 *   get:
 *     summary: Get All Doctors
 *     tags: [Doctor]
 *     description: All Doctors  
 *     responses:
 *       200:
 *         description: Returns all the users
 */

/**
 * @swagger
 * /api/deleteDoctor:
 *   delete:
 *     summary: Remove the Doctor
 *     tags: [Doctor]
 *     parameters:
 *       - in: query
 *         name: id
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: The Doctor was deleted
 *       404:
 *         description: The Doctor was not found
 */


/**
 * @swagger
 * /api/updateDoctor:
 *   put:
 *     summary: update a Doctor
 *     tags: [Doctor]
 *     parameters:
 *      - in: query
 *        name: id
 *        type: string
 *        required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateDoctor'
 *     responses:
 *       200:
 *         description: Doctor Updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/updateDoctor'
 *       500:
 *         description: Some server error
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     updateDoctor:
 *       type: object
 *       required:
 *         - doctorName
 *         - doctor_id
 *         - qualification
 *         - email
 *         - specialist
 *         - salary
 *       properties:
 *         doctorName:
 *           type: string
 *         doctor_id:
 *           type: number
 *         qualification:
 *           type: string
 *         email:
 *           type: string
 *         specialist:
 *           type: string
 *         salary:
 *           type: number
 */