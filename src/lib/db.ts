import mongoose from "mongoose";

const connectionstring: string = process.env.mongourl || "";

const connectDB = async (): Promise<string> => {
    try {
        await mongoose.connect(connectionstring);
        console.log("----------------------------------Connected to mongodb----------------------------------");
        return "Connected to mongodb";
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message);
            return err.message;
        }
        return "Unknown error occurred";
    }
};

export default connectDB;
