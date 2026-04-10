import { MongoClient, ObjectId } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

await client.connect();

const db = client.db();

// const collection = db.collection("users");

// await db.createCollection("users", {
//   validator: {
//     name: {
//       $type: "string",
//     },
//     age: {
//       $type: "int",
//       $gt: 18,
//       $lte: 80,
//     },
//   },

// });
// await db.command({
//   create: "users",
//   validator: {
//     $jsonSchema: {
//       required: ["name", "age"],
//       properties: {
//         _id: {
//           bsonType: "objectId",
//         },
//         name: {
//           bsonType: "string",
//           minLength: 5,
//         },
//         age: {
//           bsonType: "int",
//           minimum: 18,
//           maximum: 90,
//         },
//       },
//       additionalProperties: false,
//     },
//   },
// });

await db.command({
  collMod: "users",
  validator: {
    $jsonSchema: {
      required: ["name", "age"],
      properties: {
        _id: {
          bsonType: "objectId",
        },
        name: {
          bsonType: "string",
          minLength: 5,
        },
        age: {
          bsonType: "int",
          minimum: 18,
          maximum: 90,
        },
      },
      
      additionalProperties: false,
    },
  },
  validationAction: "warn",
  validationLevel: "strict",
});

// const collections = await db.listCollections().toArray();
// console.log(collections[0].options);

client.close();
