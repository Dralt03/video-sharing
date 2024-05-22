import mongoose from "mongoose";

const DB_NAME = "videoTube";
const connetDB = async () => {
  try {
    const con = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
    console.log(`\nMongoDB connected || DB Host: ${con.connection.host}`);
  } catch (err) {
    console.log("Error: ", err);
    process.exit(1);
  }
};

export default connetDB;
