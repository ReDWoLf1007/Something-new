const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mer_admin";

const URI = process.env.MONGODB_URI;


const connectDb = async () =>{
    try {
        if (!URI) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }
        await mongoose.connect(URI);
        console.log("Connection successful to DB");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDb;