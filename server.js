const express = require('express');
require('dotenv').config();
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Global middleware
app.use(express.json()); // parse JSON bodies

// Home page with instructions
app.get('/', (req, res) => {
  res.send(`
    <style>
      body { font-family: Arial, sans-serif; line-height: 1.6; padding: 2em; }
      h1, h2, h3 { color: #333; }
      code { background-color: #f4f4f4; padding: 2px 6px; border-radius: 4px; }
      pre { background-color: #f4f4f4; padding: 1em; border-radius: 4px; white-space: pre-wrap; }
    </style>
    <h1>Welcome to the Task Manager API</h1>
    <p>This is a simple REST API for managing tasks. Here's how you can interact with it:</p>
    <h2>Available Endpoints:</h2>
    <ul>
        <li><code>GET /tasks</code> - Retrieve all tasks.</li>
        <li><code>GET /tasks/:id</code> - Retrieve a single task by its ID.</li>
        <li><code>POST /tasks</code> - Create a new task.</li>
        <li><code>PUT /tasks/:id</code> - Update an existing task.</li>
        <li><code>DELETE /tasks/:id</code> - Delete a task.</li>
    </ul>
    <h2>How to Test:</h2>
    <p>You can use tools like Postman, Insomnia, or <code>curl</code> to test the endpoints.</p>
    <h3>Example: Create a new task using <code>curl</code></h3>
    <pre>
curl -X POST http://localhost:3000/tasks \\
-H "Content-Type: application/json" \\
-d '{
  "title": "My New Task",
  "description": "This is a test task.",
  "dueDate": "2025-12-31",
  "status": "pending"
}'
    </pre>
    <p>Enjoy exploring the API!</p>
  `);
});

// Health check
app.get('/health', (_req, res) => res.status(200).json({ status: 'ok' }));

// Routes
app.use('/tasks', taskRoutes);

// 404 for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Centralized error handler (so controllers can `next(err)`)
app.use((err, _req, res, _next) => {
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({ error: err.message || 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
