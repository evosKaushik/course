import { MongoClient, ObjectId } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

await client.connect();

const db = client.db("school");

const studentsCollection = db.collection("students");
console.log(
  await studentsCollection.replaceOne(
    { _id: new ObjectId("69cf344feb6efe6f2a822bc4") },
    { class: 10, age: 17 },
  ),
);

client.close();
