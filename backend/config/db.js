import mongoose from "mongoose";

//create connection with mongodb & create database
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://userquiz:quizapp@cluster0.mdxevfq.mongodb.net/QuizApp')
    .then(() => {
        console.log("MongoDB connected successfully");
    })
}