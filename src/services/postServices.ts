// services/postService.ts
import { PostModel } from "../schemas/postSchema";

type PostData = {
	_id?: string;
	title: string;
	author?: string;
	contents?: string;
	tags?: string[];
};

export const getPostsService = async () => {
	return await PostModel.find().sort();
};

export const createPostService = async (data: PostData) => {
	const post = new PostModel(data);
	return await post.save();
};

export const getPostByIdService = async (id: string) => {
	return await PostModel.findById(id);
};

export const updatePostService = async (id: string, data: PostData) => {
	return await PostModel.findByIdAndUpdate(id, data, { new: true });
};

export const deletePostService = async (id: string) => {
	return await PostModel.findByIdAndDelete(id);
};
