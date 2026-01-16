import { MongoMemoryServer } from "mongodb-memory-server";

const globalSetup = async () => {
	const instance = await MongoMemoryServer.create({
		binary: {
			version: "9.1.3",
		},
	});
	const uri = instance.getUri();
	process.env.MONGO_URI = uri;
};

export default globalSetup;
