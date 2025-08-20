import { validate } from "@/lib/utils/parseData";
import apiClient from "@/repositories/apiClient";
import {
  postSchema,
  responseSchema,
  type AddPost,
  type GetPostsOptions,
  type Post,
} from "@/types/post.types";

export const getPosts = async (options?: GetPostsOptions) => {
  //await new Promise((resolve) => setTimeout(resolve, 500))
  const { page, limit } = options ? options : {};

  const queryParams = new URLSearchParams();
  if (limit) queryParams.append("limit", limit.toString());
  if (page) queryParams.append("page", page.toString());
  const queryString = queryParams.toString();
  const response = await apiClient({
    method: "get",
    url: `/posts${queryString ? `?${queryString}` : ""}`,
  });
  return validate(responseSchema, response.data);
};

export const createPost = async ({ title, body }: AddPost): Promise<Post> => {
  const response = await apiClient({
    method: "post",
    url: `/posts`,
    data: {
      title,
      body,
    },
  });
  return validate(postSchema, response.data);
};
