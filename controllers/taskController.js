const service = require('../data/taskService');
const { validateTaskPayload } = require('../models/task');

async function listTasks(req, res, next) {
  try {
    const all = service.getAll();
    res.status(200).json(all);
  } catch (err) {
    next(err);
  }
}

async function getTask(req, res, next) {
  try {
    const { id } = req.params;
    const task = service.getById(id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.status(200).json(task);
  } catch (err) {
    next(err);
  }
}

async function createTask(req, res, next) {
  try {
    const { valid, errors } = validateTaskPayload(req.body);
    if (!valid) return res.status(400).json({ errors });

    const created = service.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
}

async function updateTask(req, res, next) {
  try {
    const { id } = req.params;
    const { valid, errors } = validateTaskPayload(req.body); // PUT = full replace
    if (!valid) return res.status(400).json({ errors });

    const updated = service.update(id, req.body);
    if (!updated) return res.status(404).json({ error: 'Task not found' });
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
}

async function deleteTask(req, res, next) {
  try {
    const { id } = req.params;
    const ok = service.remove(id);
    if (!ok) return res.status(404).json({ error: 'Task not found' });
    res.status(204).send(); // No Content
  } catch (err) {
    next(err);
  }
}

module.exports = {
  listTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
};
