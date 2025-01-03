import mongoose from "mongoose";

export default async function connectDB() {
    try {
        mongoose.connect(process.env.MONGO_URI)
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log('MongoDB connected')
        })
        connection.on('error', () => {
            console.log('MongoDB connection failed')
        })
    } catch (error) {
        console.log(error)
    }
}