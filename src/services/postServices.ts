// services/postService.ts
import { PostModel } from "../schemas/postSchema";

export const getPostsService = async () => {
	return await PostModel.find().sort();
};

export const createPostService = async (data: any) => {
	const post = new PostModel(data);
	return await post.save();
};
