import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

await client.connect();

const db = client.db("school");

const studentsCollection = db.collection("students");
const teachersCollection = db.collection("teachers");

const result1 = await studentsCollection.insertOne({name: "Bola", age: 18})
const result2 = await teachersCollection.insertMany([{name: "John", age: 42}, {name: "Guru", age: 97}])

console.log(result1, result2);

client.close();
