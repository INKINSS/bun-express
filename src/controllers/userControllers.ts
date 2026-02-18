import type { Request, Response } from "express";
import {
	createUserService,
	deleteUserService,
	getUserByIdService,
	getUsersService,
	updateUserService,
} from "../services/userServices";

export const getUsers = async (_req: Request, res: Response) => {
	try {
		const users = await getUsersService();
		res.send(users);
	} catch (error) {
		console.log("error", error);
	}
};

export const getUserById = async (_req: Request, res: Response) => {
	try {
		const userById = await getUserByIdService(_req.params.id as string);
		res.send(userById);
	} catch (error) {
		console.log("error", error);
	}
};

export const createUser = async (_req: Request, res: Response) => {
	try {
		const { username, fullname, age } = _req.body;
		const user = await createUserService({ username, fullname, age });
		res.send(user);
	} catch (error) {
		console.log("error", error);
	}
};

export const updateUser = async (_req: Request, res: Response) => {
	try {
		const updateUser = await updateUserService(
			_req.params.id as string,
			_req.body,
		);
		res.send(updateUser);
	} catch (error) {
		console.log(`error updating user: ${error as string}`);
	}
};

export const deleteUser = async (_req: Request, res: Response) => {
	try {
		const deleteUser = await deleteUserService(_req.params.id as string);
		res.send(deleteUser);
	} catch (error) {
		console.log("error to deleted user", error);
	}
};
