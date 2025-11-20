import mongoose from "mongoose";

//create connection with mongodb & create database
export const connectDB = async () => {
    await mongoose.connect('connection_String')
    .then(() => {
        console.log("MongoDB connected successfully");
    })
}
