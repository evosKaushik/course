import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

await client.connect();

const db = client.db("todoApp");
const collection = db.collection("todos");

const cursor = collection.find(
  {},
  { $projection: { title: 1, isCompleted: 1, _id: 0 } },
);
//   .map(({ title, isCompleted }) => ({ title, isCompleted }));

const data = await cursor.toArray();

console.log(data);

client.close();
