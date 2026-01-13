import { model, Schema } from "mongoose";

const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
	},
	fullname: {
		type: String,
		require: true,
	},
	age: {
		type: Number,
		require: true,
	},
});

export const UserModel = model("User", UserSchema);
