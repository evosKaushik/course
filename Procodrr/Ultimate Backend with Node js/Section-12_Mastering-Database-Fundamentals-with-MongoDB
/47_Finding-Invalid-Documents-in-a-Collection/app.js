import { MongoClient, ObjectId } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

await client.connect();

const db = client.db();

const collection = db.collection("users");

const collectionsInfo = await db.listCollections({ name: "users" }).toArray();

const schema = collectionsInfo[0].options.validator.$jsonSchema;


const invalidateDocument = await collection.find({
  $nor: [
    {
      $jsonSchema: schema,
    },
  ],
}).toArray();

console.log(invalidateDocument);

// const result = await db.command({
//   validate: "users",
// });

// console.log(result);

client.close();
