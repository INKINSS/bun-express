import { model, Schema } from "mongoose";

const PostSchema = new Schema(
	{
		title: {
			type: String,
			require: true,
		},
		author: {
			type: String,
			require: true,
		},
		contents: {
			type: String,
		},
		tags: {
			type: [String],
		},
	},
	{ timestamps: true },
);

export const PostModel = model("Post", PostSchema);
