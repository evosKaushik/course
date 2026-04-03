import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

await client.connect();

const db = client.db("todoApp");
const collection = db.collection("todos");

const cursor = collection.find();

// console.log(await cursor.hasNext());
// console.log(await cursor.next());
// console.log(await cursor.hasNext());
// console.log(await cursor.next());
// console.log(await cursor.());
// console.log(await cursor.next());
let count = 0;
while (await cursor.hasNext()) {
  count++;
  console.log(await cursor.next());
  if (count === 5) break;
}

// console.log(await cursor.next());
// console.log(await cursor.next());

// for await (const data of cursor) {
//   console.log(data);
// }

client.close();
