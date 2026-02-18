import { UserModel } from "../schemas/userSchema";

type UserData = {
	_id?: string;
	username: string;
	fullname: string;
	age: string;
};

export const getUsersService = async () => {
	return await UserModel.find().sort();
};

export const createUserService = async (data: UserData) => {
	const user = new UserModel(data);
	return await user.save();
};

export const getUserByIdService = async (id: string) => {
	return await UserModel.findById(id);
};

export const updateUserService = async (id: string, data: UserData) => {
	return await UserModel.findByIdAndUpdate(id, data, { new: true });
};

export const deleteUserService = async (id: string) => {
	return await UserModel.findByIdAndDelete(id);
};
