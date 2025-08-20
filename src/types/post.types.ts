import z from "zod";

export const addPostSchema = z.object({
  title: z.string(),
  body: z.string(),
});

export const postSchema = addPostSchema.extend({
  id: z.number(),
});

export type AddPost = z.infer<typeof addPostSchema>;

export type Post = z.infer<typeof postSchema>;

export const responseSchema = z.object({
  data: z.array(postSchema),
  total: z.number(),
  limit: z.number(),
  hasNext: z.boolean(),
  page: z.number(),
});

export type GetPostResponse = z.infer<typeof responseSchema>;

export const GetPostsParamsSchema = z.object({
  page: z.number().optional(),
  limit: z.number().optional(),
});

export type GetPostsOptions = z.infer<typeof GetPostsParamsSchema>;

export type AddPostModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (post: AddPost) => void;
};