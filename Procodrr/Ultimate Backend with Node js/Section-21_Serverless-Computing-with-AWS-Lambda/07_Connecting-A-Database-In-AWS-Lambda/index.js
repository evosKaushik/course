import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://kaushiklf07_db_user:qUNPXBOsgI4kc1I6@cluster0.6uuy0iq.mongodb.net/";



const client = new MongoClient(MONGO_URI);

await client.connect();

const db = client.db("todo");

const todosCollection = db.collection("todos");


// Seed the database with default todos on first run
const existingTodos = await todosCollection.find().toArray();
if (existingTodos.length === 0) {
  await todosCollection.insertMany([
    { id: "1", title: "Learn AWS Lambda", done: false },
    { id: "2", title: "Understand Function URLs", done: true },
    { id: "3", title: "Build Todo API", done: false },
    { id: "4", title: "Deploy without API Gateway", done: false },
  ]);
}

export async function handler(event) {
  const method = event.requestContext.http.method;
  const path = event.rawPath;



  let todos = await todosCollection.find().toArray();

  // GET /todos
  if (method === "GET" && path === "/todos") {
    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(todos),
    };
  }

  // GET /todos/{id}
  else if (method === "GET" && path.startsWith("/todos/")) {
    const id = path.split("/")[2];
    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(todos.find(t => t.id === id)),
    };
  }

  // POST /todos
  else if (method === "POST" && path === "/todos") {
    const body = JSON.parse(event.body);
    const todo = { id: String(Date.now()), title: body.title, done: false };
    await todosCollection.insertOne(todo);
    return {
      statusCode: 201,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(todo),
    };
  }

  // PUT /todos/{id}
  else if (method === "PUT" && path.startsWith("/todos/")) {
    const id = path.split("/")[2];
    const body = JSON.parse(event.body);
    const todo = todos.find(t => t.id === id);

    if (body.title !== undefined) todo.title = body.title;
    if (body.done !== undefined) todo.done = body.done;

    await todosCollection.updateOne({ id }, { $set: todo });
    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(todo),
    };
  }

  // DELETE /todos/{id}
  else if (method === "DELETE" && path.startsWith("/todos/")) {
    const id = path.split("/")[2];
    const index = todos.findIndex(t => t.id === id);
    const deleted = todos.splice(index, 1)[0];
    await todosCollection.deleteOne({ id });
    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(deleted),
    };
  }

  return { statusCode: 404 };
}
