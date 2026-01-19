import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

let mongo: MongoMemoryServer;

export const connectMemoryDB = async () => {
	mongo = await MongoMemoryServer.create();
	const uri = mongo.getUri();
	await mongoose.connect(uri);
};

export const disconnectMemoryDB = async () => {
	await mongoose.connection.dropDatabase();
	await mongoose.connection.close();
	await mongo.stop();
};
