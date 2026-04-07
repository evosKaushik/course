import { MongoClient, ObjectId } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

await client.connect();

const db = client.db();
const collection = db.collection("users");

await collection.insertMany([
    {_id: new ObjectId("69d513ae74eb7547cccccb67"),name: "Piush"},
    {name: "Ronaldo"},
    {name: "Messi"},
    {name: "Harsh"},
], {ordered: false})

const data = await collection.find().toArray();
console.log(data);
client.close();

