Task Manager | REST API
```
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Demo","description":"Try API","dueDate":"2025-12-31","status":"pending"}'

curl http://localhost:3000/tasks

curl http://localhost:3000/tasks/<TASK_ID>

curl -X PUT http://localhost:3000/tasks/<TASK_ID> \
  -H "Content-Type: application/json" \
  -d '{"title":"Demo updated","description":"Done","dueDate":"2025-12-31","status":"completed"}'

curl -X DELETE http://localhost:3000/tasks/<TASK_ID> -i
```
