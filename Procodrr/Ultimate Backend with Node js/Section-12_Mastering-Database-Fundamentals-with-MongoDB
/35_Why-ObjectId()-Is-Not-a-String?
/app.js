import { MongoClient, ObjectId } from "mongodb";

const oid = new ObjectId("69d324576112152c7090890b")

const buffer = ObjectId.generate();
const id = new ObjectId(buffer);
console.log(id);


// const url = "mongodb://localhost:27017/storageApp";
// const client = new MongoClient(url);

// await client.connect();

// const db = client.db();
// const collection = db.collection("users");

// const data = await collection.findOne();
// console.log(data);
// client.close();

