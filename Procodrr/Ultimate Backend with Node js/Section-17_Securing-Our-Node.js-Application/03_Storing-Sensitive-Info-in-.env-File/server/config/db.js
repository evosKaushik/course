import mongoose from "mongoose";

export async function connectDB() {
  const DB_URL = process.env.MONGODB_URL

  console.log(DB_URL)
  try {
    await mongoose.connect(
      DB_URL
    );

    console.log("Database connected");
  } catch (err) {
    console.log(err);
    console.log("Could Not Connect to the Database");
    process.exit(1);
  }
}

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  console.log("Database Disconnected!");
  process.exit(0);
});
