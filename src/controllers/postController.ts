import type { Request, Response } from "express";
import { createPostService, getPostsService } from "../services/postServices";

export const getPosts = async (_req: Request, res: Response) => {
	try {
		const posts = await getPostsService();
		res.send(posts);
	} catch (error) {
		console.error(`Error getting posts: ${error as string}`);
		throw error;
	}
};

export const createPost = async (req: Request, res: Response) => {
	try {
		const { title, author, contents, tags } = req.body;
		const post = await createPostService({ title, author, contents, tags });
		res.send(post);
	} catch (error) {
		console.error(`Error creating post: ${error as string}`);
		throw error;
	}
};
