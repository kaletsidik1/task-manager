// In-memory "database"
const tasks = [
  {
    id: 't_1',
    title: 'Complete the project proposal',
    description: 'Write and submit the proposal for the new project.',
    dueDate: new Date('2025-09-15').toISOString(),
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 't_2',
    title: 'Prepare for the team meeting',
    description: 'Gather all the necessary documents and reports.',
    dueDate: new Date('2025-08-30').toISOString(),
    status: 'in-progress',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Simple id generator (uses crypto.randomUUID if available)
function generateId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
  return 't_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function getAll() {
  return tasks;
}

function getById(id) {
  return tasks.find(t => t.id === id) || null;
}

function create({ title, description, dueDate, status }) {
  const now = new Date().toISOString();
  const task = {
    id: generateId(),
    title: title.trim(),
    description,
    dueDate: new Date(dueDate).toISOString(),
    status,
    createdAt: now,
    updatedAt: now
  };
  tasks.push(task);
  return task;
}

function update(id, { title, description, dueDate, status }) {
  const idx = tasks.findIndex(t => t.id === id);
  if (idx === -1) return null;

  const updated = {
    ...tasks[idx],
    title: title.trim(),
    description,
    dueDate: new Date(dueDate).toISOString(),
    status,
    updatedAt: new Date().toISOString()
  };
  tasks[idx] = updated;
  return updated;
}

function remove(id) {
  const idx = tasks.findIndex(t => t.id === id);
  if (idx === -1) return false;
  tasks.splice(idx, 1);
  return true;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
