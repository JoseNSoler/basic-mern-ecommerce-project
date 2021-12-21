import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true

        });

        console.log("mongoDB success")
    } catch (error) {
        console.log(error);
        console.error("MongoDB connect FAIL");
        process.exit(1);
    }
}

export default connectDB 