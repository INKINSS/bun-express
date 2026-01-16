import type { Request, Response } from "express";
import { PostModel } from "../schemas/postSchema";

export const getPosts = async (_req: Request, res: Response) => {
	try {
		const posts = await PostModel.find();
		res.send(posts);
	} catch (error) {
		console.error(`Error getting posts: ${error as string}`);
		throw error;
	}
};

export const createPost = async (req: Request, res: Response) => {
	try {
		const { title, author, contents, tags } = req.body;
		const post = new PostModel({ title, author, contents, tags });
		await post.save();
		res.send(post);
	} catch (error) {
		console.error(`Error creating post: ${error as string}`);
		throw error;
	}
};
