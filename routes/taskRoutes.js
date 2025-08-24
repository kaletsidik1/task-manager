const express = require('express');
const controller = require('../controllers/taskController');

const router = express.Router();

// GET /tasks
router.get('/', controller.listTasks);

// GET /tasks/:id
router.get('/:id', controller.getTask);

// POST /tasks
router.post('/', controller.createTask);

// PUT /tasks/:id
router.put('/:id', controller.updateTask);

// DELETE /tasks/:id
router.delete('/:id', controller.deleteTask);

module.exports = router;
