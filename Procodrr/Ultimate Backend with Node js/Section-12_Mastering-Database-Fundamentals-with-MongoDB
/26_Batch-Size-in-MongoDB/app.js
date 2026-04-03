import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

await client.connect();

const db = client.db("todoApp");
const collection = db.collection("todos");

const cursor = collection.find().batchSize(100);

const data = await cursor.toArray();

console.log(data.map(({ title, isCompleted }) => ({ title, isCompleted })));

client.close();
