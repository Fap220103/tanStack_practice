import { QUERY_POST_KEY } from "@/constants/query.constant";
import { createPost, getPosts } from "@/repositories/posts/postRepository";
import type { AddPost, Post } from "@/types/post.types";
import { keepPreviousData, useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

export const useGetPostsQuery = () => {
  return useQuery({
    queryKey: [QUERY_POST_KEY],
    queryFn: () => getPosts({}),
    staleTime: 20000,
  });
};

export const useGetPaginationPostsQuery = (page: number, limit: number) => {
  return useQuery({
    queryKey: [QUERY_POST_KEY, "pagination", page, limit],
    queryFn: () => getPosts({ page, limit }),
    placeholderData: keepPreviousData,
  });
};

export const useGetInfinitePostsQuery = () => {
  return useInfiniteQuery({
    queryKey: [QUERY_POST_KEY, "infinite"],
    queryFn: ({ pageParam }) => getPosts({ page: pageParam, limit: 10 }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.hasNext ? lastPage.page + 1 : undefined;
    },

  });
};

export const useAddPostMutation = () => useMutation<Post, Error, AddPost>({
  mutationFn: createPost,
});
