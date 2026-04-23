import { connectDB, client } from "./db.js";

try {
  const db = await connectDB();

  const command = "collMod";

  await db.command({
    [command]: "users",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["_id", "name", "email", "password", "rootDirId"],
        properties: {
          _id: {
            bsonType: "objectId",
          },
          name: {
            bsonType: "string",
            minLength: 3,
            maxLength: 20,
            description: "name must be more than 3 character",
        },
        email: {
            bsonType: "string",
            description: "invalid email",
          },
          password: {
            bsonType: "string",
            minLength: 4,
            maxLength: 20,
          },
          rootDirId: {
            bsonType: "objectId",
          },
        },
        additionalProperties: true,
      },
    },
    validationAction: "error",
    validationLevel: "strict",
  });
  await db.command({
    [command]: "directories",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["_id", "name", "parentDirId", "userId"],
        properties: {
          _id: {
            bsonType: "objectId",
          },
          name: {
            bsonType: "string",
            minLength: 3,
            maxLength: 20,
          },
          parentDirId: {
            bsonType: ["objectId", "null"],
          },
          userId: {
            bsonType: "objectId",
          },
        },
        additionalProperties: true,
      },
    },
    validationAction: "error",
    validationLevel: "strict",
  });
  await db.command({
    [command]: "files",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["_id", "name", "extension", "parentDirId", "userId"],
        properties: {
          _id: {
            bsonType: "objectId",
          },
          name: {
            bsonType: "string",
            minLength: 3,
            maxLength: 20,
          },
          extension: {
            bsonType: "string",
            minLength: 3,
            maxLength: 20,
          },
          parentDirId: {
            bsonType: "objectId",
          },
          userId: {
            bsonType: "objectId",
          },
        },
        additionalProperties: true,
      },
    },
    validationAction: "error",
    validationLevel: "strict",
  });
  console.log("Validation successfully updated!");
} catch (error) {
  console.log(error.message);
} finally {
  await client.close();
  console.log("Client Disconnected!");
}
