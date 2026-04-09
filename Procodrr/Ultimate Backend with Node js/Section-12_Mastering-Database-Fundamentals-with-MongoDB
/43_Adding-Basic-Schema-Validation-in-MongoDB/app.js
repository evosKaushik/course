import { MongoClient, ObjectId } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

await client.connect();

const db = client.db();

const collection = db.collection("users");

await db.command({
  collMod: "users",
  validator: {
    name: {
      $type: "string",
    },
    age: {
      $type: "int",
      $gt: 18,
      $lte: 80,
    },
  },
  validationAction: "warn"
});
// const collection = await db.listCollections().toArray();

// console.log(collection[0].options);

try {
  await collection.insertOne({ name: "Kaushik", age: 12 });
} catch (error) {
  console.log(error);
}

client.close();
