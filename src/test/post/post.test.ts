import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { PostModel } from "../../schemas/postSchema";
import {
	createPostService,
	getPostByIdService,
	getPostsService,
} from "../../services/postServices";
import { connectMemoryDB, disconnectMemoryDB } from "../setup/mongoMemory";

const samplePost = [
	{
		title: "First Post",
		author: "Alice",
		contents: "This is the content of the first post.",
		tags: ["introduction", "welcome"],
	},
	{
		title: "Second Post",
		author: "Bob",
		contents: "This is the content of the second post.",
		tags: ["update", "news"],
	},
	{
		title: "Third Post",
		author: "Charlie",
		contents: "This is the content of the third post.",
		tags: ["announcement", "events"],
	},
] as const;

let firstPostId = "";

beforeAll(async () => {
	await connectMemoryDB();
	await PostModel.deleteMany({});
	for (const post of samplePost) {
		const newPost = new PostModel(post);
		const savedPost = await newPost.save();
		if (post.title === samplePost[0].title) {
			firstPostId = savedPost._id.toString();
		}
	}
});

afterAll(async () => {
	await disconnectMemoryDB();
});

describe("get Posts", () => {
	test("should retrieve all posts successfully", async () => {
		const post = await getPostsService();
		expect(post.length).toEqual(samplePost.length);
	});

	test("should be able post with author", async () => {
		const post = await createPostService({
			title: "Test Post",
			contents: "This is a test post content",
			tags: ["test", "post"],
			author: "John Doe",
		});

		expect(post.author).toBe("John Doe");
	});

	test("get a post", async () => {
		const post = await getPostByIdService(firstPostId);
		expect(post?.title).toBe(samplePost[0].title);
	});
});

describe("create a new Post", () => {
	test("should create a new post successfully", async () => {
		const post = await createPostService({
			title: "Test Post",
			author: "John Doe",
			contents: "This is a test post content",
			tags: ["test", "post"],
		});

		expect(post.title).toBe("Test Post");
		expect(post.author).toBe("John Doe");
	});

	test("should fail to create a post with missing title", async () => {
		expect(
			createPostService({
				title: "",
				author: "Jane Doe",
				contents: "This post has no title",
				tags: ["invalid", "post"],
			}),
		).rejects.toThrow();
	});

	test("should fail to create a post with minimal data", async () => {
		expect(
			createPostService({
				title: "No title and author",
			}),
		).rejects.toThrow();
	});
});
