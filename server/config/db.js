import mongoose from "mongoose";

export default async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`MongoDB connected on port ${conn.connection.port} of ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}