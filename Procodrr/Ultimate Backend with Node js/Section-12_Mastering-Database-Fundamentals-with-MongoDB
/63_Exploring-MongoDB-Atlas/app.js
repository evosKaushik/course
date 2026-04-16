import { MongoClient } from "mongodb";

const uri = "mongodb+srv://kaushik:LC3mclwF2NAauL5z@cluster0.pihadhk.mongodb.net/sample_mflix?appName=Cluster0";

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const db = client.db(); // OR client.db("sample_mflix")
    const collection = db.collection("comments");

    const data = await collection.find().toArray();
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

run();