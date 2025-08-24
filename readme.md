# Task Manager API

A simple and lightweight REST API for managing tasks, built with Node.js and Express. This project provides a basic structure for a task management system with CRUD (Create, Read, Update, Delete) functionality and uses an in-memory database for simplicity.

## Features

- **CRUD Operations:** Full support for creating, reading, updating, and deleting tasks.
- **In-Memory Storage:** No database setup required; tasks are stored in memory.
- **Auto-Reloading:** Uses `nodemon` for automatic server restarts during development.
- **Environment Configuration:** Uses `dotenv` to manage environment variables.
- **User-Friendly Welcome Page:** A home page with instructions on how to use the API.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- npm (comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/kaletsidik1/task-manager.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd task-manager
    ```

3.  **Install the dependencies:**
    ```bash
    npm install
    ```

### Running the Application

To run the server in development mode with auto-reloading, use the following command:

```bash
npm run dev
```

The server will start and be accessible at `http://localhost:3000`.

## API Endpoints

The base URL for all API endpoints is `/tasks`.

| Method   | Endpoint          | Description                  |
| :------- | :---------------- | :--------------------------- |
| `GET`    | `/`               | Get the API welcome page.    |
| `GET`    | `/tasks`          | Retrieve a list of all tasks.|
| `GET`    | `/tasks/:id`      | Retrieve a single task by ID.|
| `POST`   | `/tasks`          | Create a new task.           |
| `PUT`    | `/tasks/:id`      | Update an existing task.     |
| `DELETE` | `/tasks/:id`      | Delete a task by ID.         |

### Example: Create a New Task

To create a new task, send a `POST` request to `/tasks` with a JSON body like this:

```json
{
  "title": "My New Task",
  "description": "This is a description for my new task.",
  "dueDate": "2025-12-31",
  "status": "pending"
}
```

#### Using `curl`:

```bash
curl -X POST http://localhost:3000/tasks \
-H "Content-Type: application/json" \
-d '{
  "title": "My New Task",
  "description": "This is a description for my new task.",
  "dueDate": "2025-12-31",
  "status": "pending"
}'
```

## Technologies Used

- **[Node.js](https://nodejs.org/)**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **[Express](https://expressjs.com/)**: A minimal and flexible Node.js web application framework.
- **[Nodemon](https://nodemon.io/)**: A tool that helps develop Node.js-based applications by automatically restarting the node application when file changes in the directory are detected.
- **[Dotenv](https://www.npmjs.com/package/dotenv)**: A zero-dependency module that loads environment variables from a `.env` file into `process.env`.
