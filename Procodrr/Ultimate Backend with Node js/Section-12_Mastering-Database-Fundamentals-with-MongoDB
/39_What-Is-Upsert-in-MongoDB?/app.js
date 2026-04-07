import { MongoClient, ObjectId } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

await client.connect();

const db = client.db();
const collection = db.collection("users");

const result = await collection.updateMany(
  { name: "Ayush" },
  { $set: { age: 70 } },
  { upsert: true },
);
console.log(result);
client.close();
