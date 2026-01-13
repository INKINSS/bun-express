import type { Request, Response } from "express";
import { UserModel } from "../schemas/userSchema";

export const getUsers = async (_req: Request, res: Response) => {
	try {
		const users = await UserModel.find();
		res.send(users);
	} catch (error) {
		console.error(`Error getting users: ${error as string}`);
		throw error;
	}
};
