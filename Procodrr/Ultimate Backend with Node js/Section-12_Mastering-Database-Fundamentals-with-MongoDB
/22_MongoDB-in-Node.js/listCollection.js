import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

await client.connect();

const db = client.db("todoApp");

// const collectionList = await db.listCollections().toArray();
// console.log(collectionList);


const collection = db.collection("todos")

const todoApp = await collection.find().toArray()

console.log(todoApp);
