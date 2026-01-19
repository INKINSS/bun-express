import { model, Schema } from "mongoose";

const PostSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
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
