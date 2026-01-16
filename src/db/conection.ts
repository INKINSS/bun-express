import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/test?authSource=admin`,
		);
		console.log(`MongoDB connected: ${conn.connection.host}`);
		console.log(`Database name: ${conn.connection.name}`);
	} catch (error) {
		console.error(`Error connecting to MongoDB: ${error as string}`);
		process.exit(1);
	}
};

export default connectDB;
