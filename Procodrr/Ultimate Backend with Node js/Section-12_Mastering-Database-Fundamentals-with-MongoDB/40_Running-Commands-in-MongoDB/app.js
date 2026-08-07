import { MongoClient, ObjectId } from "mongodb";

const url = "mongodb://localhost:27017/newDB";
const client = new MongoClient(url);

await client.connect();

const db = client.db();

// await db.createCollection("vegetables")

// const collection = db.collection("fruits")
// await collection.insertOne({name: "Apple"})

const result = await db.command({ dropDatabase: 1});

console.log(result);
client.close();
