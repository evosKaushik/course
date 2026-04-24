import mongoose from "mongoose";

export async function connectDB() {
  await mongoose.connect(
    "mongodb://admin:admin@localhost:27017/storageApp?authSource=admin",
  );
  console.log("Database connected");
}

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  console.log("Client Disconnected!");
  process.exit(0);
});
