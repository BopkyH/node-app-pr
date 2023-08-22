const express = require('express');
const multer = require('multer');
const userController = require('../controllers/userController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of all users
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get('/', userController.getAllUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retrieve a user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A user object
 */
router.get('/:id', userController.getUserById);

// /**
//  * @swagger
//  * /users:
//  *   post:
//  *     summary: Create a new user
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               name:
//  *                 type: string
//  *               email:
//  *                 type: string
//  *     responses:
//  *       201:
//  *         description: Created
//  */
// router.post('/', userController.createUser);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - name: name
 *         in: formData
 *         required: true
 *         type: string
 *         description: The name of the user
 *       - name: email
 *         in: formData
 *         required: true
 *         type: string
 *         description: The email of the user
 *       - name: avatar
 *         in: formData
 *         type: file
 *         description: The avatar image of the user
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/', upload.single('avatar'), userController.createUser);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated
 */
router.put('/:id', userController.updateUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Deleted
 */
router.delete('/:id', userController.deleteUser);

/**
 * @swagger
 * /users/upload:
 *   post:
 *     summary: Upload an image for a user
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: image
 *         type: file
 *         description: The file to upload
 *     responses:
 *       200:
 *         description: Uploaded
 */
router.post('/upload', upload.single('image'), userController.uploadImage);

module.exports = router;
