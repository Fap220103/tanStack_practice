import { useGetPostsQuery } from "@/queries/posts.query";
import React from "react";

export const PostPage = () => {
  const {data: posts, isLoading, error} = useGetPostsQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return <div>{posts[0].title}</div>;
};
