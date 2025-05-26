import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.mongodb_uri)
        console.log("Mongodb connected")
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}

export default connectDB