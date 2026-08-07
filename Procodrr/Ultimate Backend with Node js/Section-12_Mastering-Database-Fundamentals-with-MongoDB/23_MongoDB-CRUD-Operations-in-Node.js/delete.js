import { MongoClient, ObjectId } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

await client.connect();

const db = client.db("school2");

const studentsCollection = db.collection("students");
const teachersCollection = db.collection("teachers");

//Delete a Collection
// console.log(await studentsCollection.drop());

// Delete a Document
// console.log(
//   await teachersCollection.deleteOne({
//     _id: new ObjectId("69cf34031f95852718a0158c"),
//   }),
// );

// Delete a Field or property
// console.log(
//   await teachersCollection.updateOne(
//     {
//       _id: new ObjectId("69cf34031f95852718a0158d"),
//     },
//     {
//       $unset: { age: "" },
//     },
//   ),
// );

// Delete a Database
// console.log(await db.dropDatabase());

client.close();
