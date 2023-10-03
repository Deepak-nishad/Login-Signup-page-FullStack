import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // const conn = await mongoose.connect(process.env.MONGODB_URL);
    const conn = await mongoose.connect(
      "mongodb+srv://ramanandsager57100:VishalNisPapa@cluster0.tzdtj6f.mongodb.net/event"
    );
    console.log(
      `Connected to the mongoAtlas database: ` +
        `${conn.connection.name}`.green.bold
    );
  } catch (error) {
    console.log(
      `Error while connecting to the mongoAtlas database: ` +
        `${error}`.red.bold
    );
  }
};

export default connectDB;
