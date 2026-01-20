import type { Request, Response } from "express";
import {
	createPostService,
	deletePostService,
	getPostByIdService,
	getPostsService,
	updatePostService,
} from "../services/postServices";

export const getPosts = async (_req: Request, res: Response) => {
	try {
		const posts = await getPostsService();
		res.send(posts);
	} catch (error) {
		console.error(`Error getting posts: ${error as string}`);
		throw error;
	}
};

export const getPostById = async (_req: Request, res: Response) => {
	try {
		const postById = await getPostByIdService(_req.params.id as string);
		res.send(postById);
	} catch (error) {
		console.error(`Error getting post by id: ${error as string}`);
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

export const updatePost = async (_req: Request, res: Response) => {
	try {
		const updatePost = await updatePostService(
			_req.params.id as string,
			_req.body,
		);
		res.send(updatePost);
	} catch (error) {
		console.log(`error updating post: ${error as string}`);
		throw error;
	}
};

export const deletePost = async (req: Request, res: Response) => {
	try {
		const deletePost = await deletePostService(req.params.id as string);
		res.send(deletePost);
	} catch (error) {
		console.log(`error deleting post: ${error as string}`);
		throw error;
	}
};
